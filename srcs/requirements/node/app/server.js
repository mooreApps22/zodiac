const express = require("express");
const { WebSocketServer } = require("ws");
const path = require("path");

const app = express();

//app.get("/", (req, res) => res.send("Hello From Node"));
app.use(express.static(path.join(__dirname, "public")));
app.get("/health", (req, res) => res.json({ ok: true }));

const server = app.listen(3000, "0.0.0.0", () => {
  console.log("Listening on 0.0.0.0:3000");
});

const ws = new WebSocketServer({ server, path: "/ws" });
ws.on("connection", (ws) => {
  ws.send("connected");
  ws.on("message", (msg) => ws.send(`echo: ${msg}`));
});
