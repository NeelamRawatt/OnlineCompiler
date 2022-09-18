import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import userContext from "../../context/users/userContext";

function QuestionDescription(props) {
  const { notifyToastError } = useContext(userContext);
  const authToken = useSelector((state) => state.user.authToken);
  const { state } = useLocation();
  const nav = useNavigate();

  const handleNavigation = () => {
    console.log(authToken.payload);
    if (authToken.payload !== "") nav("ide", { state });
    else notifyToastError("Please Login to start solving problems");
  };

  return (
    <div className=" m-3 md:mx-36 bg-slate-100    border-4 rounded-xl p-4 my-10">
      <h1 className="text-5xl font-bold mx-3 flex items-center justify-center">
        {state.title}
      </h1>
      <div className="divider"></div>
      <div className="">
        {state.difficultyLevel === "Easy" && (
          <span className="bg-green-500 px-3 py-1 rounded-2xl text-white font-bold my-4 ">
            {state.difficultyLevel}
          </span>
        )}
        {state.difficultyLevel === "Medium" && (
          <span className="bg-yellow-500 px-3 py-1 rounded-2xl text-white font-bold my-4 ">
            {state.difficultyLevel}
          </span>
        )}
        {state.difficultyLevel === "Hard" && (
          <span className="bg-red-500 px-3 py-1 rounded-2xl text-white font-bold my-4 ">
            {state.difficultyLevel}
          </span>
        )}

        <span
          className={`m-4 bg-blue-500 px-3 py-1 rounded-2xl text-white font-bold my-4 `}
        >
          {state.category}
        </span>
      </div>
      <p className="my-4 border bg-white shadow-xl rounded-lg m-5 p-2 leading-relaxed">
        {state.description}
      </p>
      <div className="divider"></div>
      <div className="inputDesc">
        <h3 className="font-bold text-lg">Input Description</h3>
        <p className="bg-white leading-relaxed shadow-xl m-5  p-4 border rounded-lg mt-2">
          {state.inputDesc}
        </p>
      </div>

      <div className="divider"></div>
      <div className="outputDesc mt-4">
        <h3 className="font-bold text-lg">Output Description</h3>
        <p className="bg-white leading-relaxed shadow-xl m-5  p-4 border rounded-lg mt-2">
          {state.outputDesc}
        </p>
      </div>

      <div className="divider"></div>
      <h3 className="font-bold text-lg">Example</h3>

      <div className="mt-4 flex flex-row  m-5 bg-slate-200 rounded-lg shadow-lg">
        <div className="mt-4 ml-4 w-1/2">
          <h3 className="font-bold ">Input</h3>
          <div className="bg-white rounded-lg shadow-xl p-4 m-5 ">
            <pre>
              <code>{state.exampleInput}</code>
            </pre>
          </div>
        </div>
        <div className="divider divider-horizontal">I/O</div>
        <div className="mt-4 ml-4 w-1/2">
          <h3 className="font-bold ">Output</h3>
          <div className="bg-white rounded-lg shadow-xl p-4 m-5 ">
            <pre>
              <code>{state.exampleOutput}</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="mt-4">
        <h3 className="font-bold text-xl">Constraints</h3>
        <div className="constrain p-3 bg-white shadow-xl m-5 border rounded-md">
          <pre>{state.constraints}</pre>
        </div>
      </div>
      <div className="divider"></div>
      <button
        onClick={handleNavigation}
        className="shadow-xl  relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
      >
        <span className="relative px-5 py-2.5 transition-all  ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Submit Your Solution
        </span>
      </button>
    </div>
  );
}

export default QuestionDescription;
