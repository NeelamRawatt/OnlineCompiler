import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import questionContext from "../../context/question/questionContext";
import { Link, useNavigate } from "react-router-dom";
import QuestionTile from "../../Components/QuestionTile";
import Footer from "../../Components/Footer";

const QuestionsList = () => {
  const nav = useNavigate();
  const context = useContext(questionContext);

  const dispatch = useDispatch();
  const { question } = useSelector((state) => state.question);

  const { allQuestion } = context;

  useEffect(() => {
    // allQuestion();
    // console.log("Que", question);
  }, []);

  const [filterLevel, setFilterLevel] = useState("all");
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          {/* <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Problems
            </h1>
          </div> */}

          <div className=" lg:w-2/3 w-full mx-auto overflow-auto">
            <div className="shadow-xl flex flex-row bg-blue-200 rounded-lg p-5 mb-4">
              <div className="shadow-2xl m-1 p-1 px-4 text-center  rounded-lg bg-white">
                <label
                  htmlFor="i"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {"Choose Difficulty"}
                </label>
                <select
                  defaultValue={filterLevel}
                  onChange={(e) =>
                    setFilterLevel(e.target.value.toLocaleLowerCase())
                  }
                  className="mb-4 border-2 border-black block p-2.5 w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>All</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>

              <div className="shadow-2xl m-1 bg-white  w-full  rounded-xl flex  justify-center items-center   ">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                  {"Problems"}
                </h1>
              </div>
            </div>
            <div className=" p-4 shadow-2xl  overflow-hidden">
              <table className=" table-auto w-full text-left whitespace-no-wrap ">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white  text-sm bg-blue-400 rounded-tl rounded-bl">
                      Name
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white  text-sm bg-blue-400">
                      Difficulty
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white  text-sm bg-blue-400">
                      Category
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white  text-sm bg-blue-400">
                      Status
                    </th>
                  </tr>
                </thead>

                <QuestionTile
                  questionList={question.payload}
                  nav={nav}
                  filterLevel={filterLevel}
                />
              </table>
            </div>
          </div>
          {/* <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                    </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuestionsList;
