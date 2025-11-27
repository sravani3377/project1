const express = require("express");
const client = require("prom-client");

const app = express();
const port = 3000;

// Metrics setup
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// Static website
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Static website running on port ${port}`);
});

