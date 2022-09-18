import { BASE_URL, createSubmittion, getAllLanguages } from "./endpoint";

const GET_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    "X-RapidAPI-Key": "bf5bf7ce00msh8d6e256c49ca1e5p1a2826jsne8d27a1059e8",
  },
};

const getLanguagesService = async (setData) => {
  await fetch(BASE_URL + getAllLanguages, GET_OPTIONS)
    .then((response) => response.json())
    .then((response) => {
      console.log("Inside GetAllLanguages : ", response);
      setData(response);
      return response;
    })
    .catch((err) => console.error(err));
};

const submitCodeService = async (code, langId, userInput) => {
  const option = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      "X-RapidAPI-Key": "bf5bf7ce00msh8d6e256c49ca1e5p1a2826jsne8d27a1059e8",
    },
    body: JSON.stringify({
      source_code: window.btoa(code),
      language_id: langId,
      stdin: window.btoa(userInput),
    }),
  };

  return await fetch(BASE_URL + createSubmittion, option)
    .then((response) => response.json())
    .then((response) => {
      console.log("Inside CreateSubmission", response);
      // return response;
      return getResultByTokenService(response.token);
    })
    .catch((err) => console.error(err));

  // let bb = getResultByTokenService(aa.token,)
};

const getResultByTokenService = async (code_token, setData) => {
  return await fetch(
    `${BASE_URL}/submissions/${code_token}?base64_encoded=false&fields=*`,
    GET_OPTIONS
  )
    .then((response) => response.json())
    .then((response) => {
      console.log("inside getbytoken", response);
      // setData(response);
      return response;
    })
    .catch((err) => console.error(err));
};

export { getLanguagesService, submitCodeService, getResultByTokenService };
