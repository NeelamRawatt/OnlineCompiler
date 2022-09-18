import React from "react";

const TextInput = ({
  title,
  placeholder,
  type,
  name,
  value,
  onChange,
  row,
  isRequired = false
}) => {
  return (
    <div className="mb-6 ">
      <label
        htmlFor="i"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {title}
      </label>

      {type == "textarea" ? (
        <>
          <textarea
            className="border-2 border-black block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            rows={row ? row : 3}
            id="i"
            name={name}
            value={value}
            placeholder={placeholder}
            required={isRequired}
            onChange={onChange}
          ></textarea>
        </>
      ) : (
        <input
          className="border-2 border-black bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type={type ? type : "text"}
          id="i"
          name={name}
          value={value}
          placeholder={placeholder}
          required={isRequired}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default TextInput;
