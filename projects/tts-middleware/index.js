import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { expressjwt } from "express-jwt";
import jwksRsa from "jwks-rsa";
import { EventSource } from "eventsource";
import https from "https";
import { URL } from "url";

dotenv.config();

const app = express();

const permittedOrigins = (process.env.PERMITTED_ORIGINS || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // no origin = same-origin or curl → allow
      if (!origin) return callback(null, true);

      if (permittedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    }, // should only allow localhost in dev, not in production
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use((req, res, next) => {
  const origin = req.get("Origin") || "";
  const referer = req.get("Referer") || "";

  // Check origin
  if (origin && !permittedOrigins.includes(origin)) {
    return res.status(403).json({ error: "Forbidden: Invalid origin" });
  }

  // Check referer starts with one of the allowed origins
  if (referer) {
    const refererAllowed = permittedOrigins.some((o) => referer.startsWith(o));
    if (!refererAllowed) {
      return res.status(403).json({ error: "Forbidden: Invalid referer" });
    }
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
    const keepAliveAgent = new https.Agent({ keepAlive: true });
    const axiosInstance = axios.create({
      httpsAgent: keepAliveAgent,
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
    });
    // Forward request to HuggingFace Gradio backend
    const joinEndpoint = new URL(
      "/gradio_api/queue/join",
      process.env.TTS_BACKEND_URL
    ).href;
    const joinResponse = await axiosInstance.post(joinEndpoint, req.body);
    const eventId = joinResponse.data.event_id;
    if (!eventId) {
      throw new Error("No event_id returned from Gradio");
    }
    const eventStreamEndpoint = new URL(
      `/gradio_api/queue/data?session_hash=${req.body["session_hash"]}`,
      process.env.TTS_BACKEND_URL
    ).href;
    const eventStream = new EventSource(eventStreamEndpoint, {
      fetch: (input, init) =>
        fetch(input, {
          ...init,
          headers: {
            ...init.headers,
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
        }),
    });
    let done = false;

    eventStream.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      // We only want this event_id
      if (data.event_id !== eventId) {
        return;
      }
      if (data.msg === "process_completed") {
        done = true;
        eventStream.close();
        const filePath = data.output?.data?.[0]?.url;
        if (!filePath || !filePath.startsWith(process.env.TTS_BACKEND_URL)) {
          return res.status(500).json({ error: "Invalid audio path returned" });
        }
        // Step 3: Fetch the audio file and stream it to the client
        const audioRes = await axiosInstance.get(filePath, {
          responseType: "stream",
        });
        res.setHeader(
          "Content-Type",
          audioRes.headers["content-type"] ||
            process.env.DEFAULT_AUDIO_CONTENT_TYPE
        );
        audioRes.data.pipe(res);
      }

      if (data.msg === "process_starts") {
        console.log("TTS processing started...");
      }

      if (data.msg === "heartbeat") {
        // Can be ignored or logged
      }
    };

    eventStream.onerror = (err) => {
      console.error("SSE error:", err);
      if (!done) {
        eventStream.close();
        res
          .status(500)
          .json({ error: "Failed to connect to Gradio event stream" });
      }
    };
  } catch (err) {
    console.error("TTS Backend Error:", err?.response?.data || err.message);
    res.status(err?.response?.status || 500).send({
      error: "Failed to reach TTS backend",
      details: err?.response?.data || err.message,
    });
  }
});
app.get("/tts/info", checkJwt, async (req, res) => {
  try {
    // Forward request to HuggingFace Gradio backend
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    };
    const infoEndpoint = new URL(
      "/gradio_api/info",
      process.env.TTS_BACKEND_URL
    ).href;
    //console.log(infoEndpoint, `Bearer ${process.env.BEARER_TOKEN}`, req.body);
    const infoResponse = await axios.get(infoEndpoint, {
      headers: headers,
    });

    //console.log("response", infoResponse.data);
    let speakers = [];
    let defaultSpeaker = "";
    let defaultDiffusionSteps = 3;
    if (infoResponse.data["named_endpoints"]) {
      const named_endpoints = infoResponse.data["named_endpoints"];
      if (named_endpoints["/synthesize"]) {
        const synthesizeEndPoint = named_endpoints["/synthesize"];
        if (synthesizeEndPoint["parameters"]) {
          for (const parameter of synthesizeEndPoint["parameters"]) {
            switch (parameter["parameter_name"]) {
              case "voice":
                speakers = parameter["type"]["enum"];
                defaultSpeaker = parameter["parameter_default"];
                break;
              case "lngsteps":
                defaultDiffusionSteps = parameter["parameter_default"];
                break;
            }
          }
        }
      }
    }
    res.json({
      speakers,
      defaultSpeaker,
      defaultDiffusionSteps,
    });
  } catch (err) {
    console.error("TTS Backend Error:", err?.response?.data || err.message);
    res.status(err?.response?.status || 500).send({
      url: err.response?.URL,
      error: "Failed to reach TTS backend",
      details: err?.response?.data || err.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`TTS Middleware listening on ${PORT}`);
});
