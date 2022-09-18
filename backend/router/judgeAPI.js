const express = require("express");
const axios = require("axios");
const btoa = require("btoa");
const judge0 = require("../helper/editorServices");
const router = express.Router();

router.get("/getAllLanguages", async (req, res) => {
  const data = await judge0.getAllLanguages();
  res.send(data);
});

router.post("/submitCode", async (req, res) => {
  const { code, langId, stdin } = req.body;
  const data = await judge0.getCodeToken(code, langId, stdin);
  const result = await judge0.getOutputByToken(data.token);
  // console.log("TOKEN",data)

  res.send(result);
});

module.exports = router;
