import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import userContext from '../context/users/userContext'
import { useSelector } from "react-redux";
import userContext from "../context/users/userContext";

const Navbar = () => {
  const context = useContext(userContext);
  const { logOut, notifyToast, notifyToastError } = context;
  const navigator = useNavigate();
  const authToken = useSelector((state) => state.user.authToken);
  const [reloadKey, setReloadKey] = useState(1);

  const logOutCall = () => {
    setReloadKey(Math.random());
    // console.log(reloadKey);
    logOut();
    navigator("/");
    notifyToast("Logged Out!")
    // console.log(authToken);
  };
  useEffect(() => {
    // console.log("Navbar ReloadKey change:", reloadKey, " ", authToken.payload);
    // const authToken = useSelector((state) => state.user.authToken);
  }, [reloadKey]);

  return (
    <div className="relative">
      <div className=" top-0 left-0 right-0 border-b-4 w-full ">
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Online Code Editor
              </span>
            </a>
            <div className="flex ">
              {/* {authToken.payload === '' && <><div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
              <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
            </div></>

            } */}
              <Link to="/ide">
                <button
                  type="button"
                  className="py-2.5 capitalize border-1 border-rose-400  px-5 mr-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Online playground
                </button>
              </Link>
              {authToken.payload === undefined || authToken.payload === "" ? (
                <div>
                  <Link to="/signup">
                    <button
                      type="button"
                      className="py-2.5 px-5 mr-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      {" "}
                      Signup
                    </button>
                  </Link>
                  <Link to="/login">
                    {" "}
                    <button
                      type="button"
                      className="py-2.5 px-5 mr-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      {" "}
                      Login
                    </button>
                  </Link>
                </div>
              ) : (
                authToken.payload !== "" && (
                  <div>
                    <button
                      type="button"
                      className="py-2.5 px-5 mr-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      onClick={logOutCall}
                    >
                      {" "}
                      Log Out
                    </button>
                  </div>
                )
              )}{" "}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
