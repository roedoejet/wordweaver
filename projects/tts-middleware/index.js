import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { expressjwt } from "express-jwt";
import jwksRsa from "jwks-rsa";
import { Client } from "@gradio/client";

dotenv.config();

const client = await Client.connect(process.env.TTS_BACKEND_URL);
const app = express();
app.use(
  cors({
    origin: "http://localhost:4200", // or '*' if you want to allow all
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

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
  const { text } = req.body;
  try {
    // Forward request to HuggingFace Gradio backend
    // const response = await axios.post(process.env.TTS_BACKEND_URL, req.body);
    const response = await client.predict("/synthesize", {
      model_name: "multi",
      text: text,
      speed: 1,
      voice_name: "Інна Гелевера",
    });
    // const response = await client.predict("/process", {
    //     language: "English",
    //     repo_id: "csukuangfj/kokoro-en-v0_19|11 speakers",
    //     text: text,
    //     sid: "0",
    //     speed: 1.0,
    // });
    res.status(response.status).send(response.data);
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
