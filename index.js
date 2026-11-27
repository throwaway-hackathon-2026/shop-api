const express = require("express");
const _ = require("lodash");
const app = express();
app.get("/health", (_req, res) => res.json({ ok: true }));
app.listen(3000);
