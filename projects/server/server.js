const path = require("path");
const express = require("express");
const compression = require("compression");

const CONTEXT = `/${process.env.CONTEXT || "word-weaver"}`;
const PORT = process.env.PORT || 4000;

const app = express();

app.use(compression());
app.use(
  CONTEXT,
  express.static(path.resolve(__dirname, "../../dist/word-weaver"))
);
app.use("/", express.static(path.resolve(__dirname, "../../dist/word-weaver")));
app.listen(PORT, () =>
  console.log(`App running on http://localhost:${PORT}${CONTEXT}`)
);
