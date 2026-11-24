require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "AI Cartoon Facebook Agent is running"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    server: "running",
    metaConfigured: Boolean(process.env.META_APP_ID),
    aiConfigured: Boolean(process.env.AI_API_KEY)
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
