import QuestionContext from "./questionContext";
import { useSelector, useDispatch } from "react-redux";
import { setQuestion } from "../../store/questionSlice";
import { useEffect } from "react";

const QuestionState = (props) => {
  const host = "http://localhost:5000";
  const dispatch = useDispatch();

  const allQuestion = async () => {
    const response = await fetch(`${host}/api/questions/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ "name": name, "email": email, "password": password })
    });
    const data = await response.json();
    // console.log("questions:",data);
    // dispatch(setAuthToken(data.authToken))
    dispatch(setQuestion(data));
    // console.log(name);
    // console.log(email);
    // console.log(password);
    // setQuestion(data);
  };

  useEffect(() => {
    allQuestion();
    console.log("inside useeffect")
  }, []);
  return (
    <QuestionContext.Provider value={{ allQuestion }}>
      {props.children}
    </QuestionContext.Provider>
  );
};
export default QuestionState;
