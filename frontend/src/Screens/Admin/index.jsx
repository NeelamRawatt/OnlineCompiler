import React, { useState } from "react";
import TextInput from "../../Components/TextInput";
import axios from "axios";

const fieldsName = {
  title: "title",
  description: "description",
  inputDesc: "inputDesc",
  outputDesc: "outputDesc",
  exampleInput: "exampleInput",
  exampleOutput: "exampleOutput",
  constraints: "constraints",
  explanation: "explanation",
  hiddenInput: "hiddenInput",
  hiddenOutput: "hiddenOutput",
  difficultyLevel: "difficultyLevel",
  category: "category",
};

const AddQuestion = () => {
  const [input, setInput] = useState({ title: "", difficultyLevel: "Easy" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //
    const data = await axios.post(
      "http://localhost:5000/api/admin/questions/addQuestion",
      {
        questionData: JSON.stringify(input),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log("data", data);
    // console.log("data", input);
  };

  return (
    <div className="mx-auto my-5  p-5 max-w-md min-w-fit mb-10 bg-green-300 rounded-lg border-4 border-slate-900">
      <p className="text-3xl dark:text-white mb-5 bold">
        {"Add New Problem : "}
      </p>

      <form onSubmit={handleSubmit} className="">
        <div>
          <label
            htmlFor="i"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {"Choose Difficulty"}
          </label>
          <select
            name={fieldsName.difficultyLevel}
            value={input.difficultyLevel}
            onChange={handleChange}
            className="mb-4 border-2 border-black block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <TextInput
          type={"text"}
          title="Problem title"
          placeholder="Enter problem name here"
          name={fieldsName.title}
          value={input.title}
          onChange={handleChange}
        />

        <TextInput
          type={"text"}
          title="Problem Category"
          placeholder="Enter problem Category, like Array, Tree, String..."
          name={fieldsName.category}
          value={input.category}
          onChange={handleChange}
          isRequired={true}
        />

        <TextInput
          type={"textarea"}
          title="Question Description"
          placeholder="Enter problem statement"
          name={fieldsName.description}
          value={input.description}
          onChange={handleChange}
          row={3}
        />

        <TextInput
          type={"textarea"}
          title="Input Description"
          placeholder="Enter here input description, how will be the input accepted.."
          name={fieldsName.inputDesc}
          value={input.inputDesc}
          onChange={handleChange}
          row={4}
        />

        <TextInput
          type={"textarea"}
          title="Output Description"
          placeholder="Enter here output description."
          name={fieldsName.outputDesc}
          value={input.outputDesc}
          onChange={handleChange}
          row={4}
        />

        <TextInput
          type={"textarea"}
          title="Problem constraints"
          placeholder="constraints"
          name={fieldsName.constraints}
          value={input.constraints}
          row={4}
          onChange={handleChange}
        />
        <TextInput
          type={"textarea"}
          title="Sample input"
          placeholder="Enter input for example"
          name={fieldsName.exampleInput}
          value={input.exampleInput}
          row={4}
          onChange={handleChange}
        />

        <TextInput
          type={"textarea"}
          title="Sample Output"
          placeholder="sample output"
          name={fieldsName.exampleOutput}
          value={input.exampleOutput}
          row={4}
          onChange={handleChange}
        />

        <TextInput
          type={"textarea"}
          title="Explanation"
          placeholder="explanation"
          name={fieldsName.explanation}
          value={input.explanation}
          row={4}
          onChange={handleChange}
        />

        <TextInput
          type={"textarea"}
          title="Hidden Input testcase"
          placeholder="hidden input "
          name={fieldsName.hiddenInput}
          value={input.hiddenInput}
          row={4}
          onChange={handleChange}
        />

        <TextInput
          type={"textarea"}
          title="Hidden Expected Output testcase"
          placeholder="hidden Output "
          name={fieldsName.hiddenOutput}
          value={input.hiddenOutput}
          row={4}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            {"Add Problem"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default AddQuestion;
