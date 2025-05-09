import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from 'axios';
import { expressjwt } from "express-jwt";
import jwksRsa from "jwks-rsa";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.PERMITTED_ORIGIN, // should only allow localhost in dev, not in production
    methods: ["POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use((req, res, next) => {
  const origin = req.get("Origin") || "";
  const referer = req.get("Referer") || "";

  const allowedOrigin = process.env.PERMITTED_ORIGIN;

  if (
    origin &&
    origin !== allowedOrigin &&
    referer &&
    !referer.startsWith(allowedOrigin)
  ) {
    return res.status(403).json({ error: "Forbidden: Invalid origin" });
  }

  next();
});

// JWT Middleware
const checkJwt = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
});

app.post("/tts", checkJwt, async (req, res) => {
  try {
    // Forward request to HuggingFace Gradio backend
    const headers = {
      "Content-Type": "application/json",
      "Authorization": process.env.BEARER_TOKEN
    };
    const response = await axios.post(process.env.TTS_BACKEND_URL + 'join', req.body, { headers: headers, responseType: 'arraybuffer' });
    console.log(response);
    res.setHeader('Content-Type', 'audio/wav'); // Or whatever format it is
    res.send(response.data);
  } catch (err) {
    console.error("TTS Backend Error:", err?.response?.data || err.message);
    res.status(err?.response?.status || 500).send({
      error: "Failed to reach TTS backend",
      details: err?.response?.data || err.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`TTS Middleware listening on ${PORT}`);
});
