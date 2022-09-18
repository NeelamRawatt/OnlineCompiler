import logo from "./logo.svg";
import "./App.css";
import Ide from "./Screens/Ide/Ide";
import Navbar from "./Components/Navbar";
import UserState from "./context/users/UserState";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import AddQuestion from "./Screens/Admin";
import QuestionState from "./context/question/QuestionState";
import QuestionsList from "./Screens/Questions/QuestionsList";
import QuestionDescription from "./Screens/Questions/QuestionDescription";
import { useContext, useEffect } from "react";
import questionContext from "./context/question/questionContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const context = useContext(questionContext);
  const { allQuestion } = context;
  useEffect(() => {
    allQuestion();
  }, []);
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/ide" element={<Ide />} />
          <Route exact path="/addQuestion" element={<AddQuestion />} />

          <Route exact path="/" element={<QuestionsList />} />
          <Route exact path="/:id/ide" element={<Ide />} />
          <Route exact path="/:id" element={<QuestionDescription />} />
        </Routes>
        {/* <Ide /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
