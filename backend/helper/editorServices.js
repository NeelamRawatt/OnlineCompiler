const axios = require('axios')
const btoa = require('btoa')

const BASE = "https://judge0-ce.p.rapidapi.com";
const HEADERS = {
  "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
  "X-RapidAPI-Key": "bf5bf7ce00msh8d6e256c49ca1e5p1a2826jsne8d27a1059e8",
};

const getAllLanguages = async () => {
  const options = {
    method: "GET",
    url: `${BASE}/languages`,
    headers: HEADERS,
  };

  return await axios
    .request(options)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
};

const getCodeToken = async (code, langId, userInput) => {
  const options = {
    method: "POST",
    url: "https://judge0-ce.p.rapidapi.com/submissions",
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      ...HEADERS,
    },
    data: JSON.stringify({
      source_code: btoa(code),
      language_id: langId,
      stdin: btoa(userInput),
    }),
  };

  return await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getOutputByToken = async (token) => {
  const options = {
    method: "GET",
    url: `${BASE}/submissions/${token}`,
    params: { base64_encoded: "false", fields: "*" },
    headers: HEADERS,
  };

  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((e) => console.log(e));
};


module.exports = {
    getAllLanguages,
    getCodeToken,
    getOutputByToken
}