import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail, setName, setPass } from "../store/userSlice";
import userContext from "../context/users/userContext";
const Signup = () => {
  const context = useContext(userContext);
  const { createUser, notifyToast, notifyToastError } = context;
  const navigator = useNavigate();

  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const signup = (e) => {
    e.preventDefault();
    if (fullname === "" || emailId === "" || password === "") {
      notifyToastError("All fields are compulsory!");
      return;
    }
    dispatch(setName(fullname));
    dispatch(setEmail(emailId));
    dispatch(setPass(password));
    createUser(fullname, emailId, password);
    setFullname("");
    setEmailId("");
    setPassword("");
    navigator("/");
    notifyToast("Account created successfully");
  };
  return (
    <div className="my-6 mt-24 md:flex md:justify-center md:items-center">
      <form className="md:w-1/3 ">
        <div class="my-6">
          <input
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Name"
            required=""
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div class="my-6">
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Email"
            required=""
            onChange={(e) => setEmailId(e.target.value)}
          />
        </div>
        <div class="mb-6">
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Password"
            required=""
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          class=" md:place-items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => signup(e)}
        >
          Sign Up
        </button>
        <div className="loginLink">
          Or <Link to="/login"> LogIn </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
