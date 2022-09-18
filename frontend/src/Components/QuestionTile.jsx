import React, { useState } from "react";

function QuestionTile({ questionList, nav, filterLevel }) {
  const [list, setList] = useState(questionList);
  const filterList = () => {
    setList((item) => {
      return item.difficultyLevel == filterLevel;
    });
  };
  return (
    <tbody>
      {list !== undefined &&
        list.map((Question) => {
          if (
            Question.difficultyLevel.toLowerCase() === filterLevel ||
            filterLevel === "all"
          )
            return (
              <tr
                key={Question._id}
                onClick={() => nav(`${Question._id}`, { state: Question })}
                className="hover:bg-teal-100  hover:text-black hover:cursor-pointer odd:bg-white even:bg-slate-200 "
              >
                <td className="px-1 py-1 md:px-4 md:py-3">
                  {/* <Link to={`${Question._id}`}>{Question.title} </Link> */}
                  {Question.title}
                </td>
                <td className="px-1 py-1 md:px-4 md:py-3">
                  {Question.difficultyLevel}
                </td>
                <td className="px-1 py-1 md:px-4 md:py-3">
                  {Question.category}
                </td>
                <td className="px-1 py-1 md:px-4 md:py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
              </tr>
            );
        })}
    </tbody>
  );
}

export default QuestionTile;
