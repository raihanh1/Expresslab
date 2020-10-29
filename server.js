"use strict";
const { quotes } = require("./quotes");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.json(quotes[Math.floor(Math.random() * quotes.length)]);
});

app.post("/", (req, res) => {
  console.log("req.body", req.body);
  let newQuote = req.body[0];
  quotes.push(newQuote);
  res.json({
    msg: "added new quote",
    quotes: quotes,
    quote: newQuote,
  });
});

app.listen(port, () => {
  console.log("Your server has started on port:", port);
});
