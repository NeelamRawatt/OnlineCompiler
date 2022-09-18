import UserContext from "./userContext";
import { useSelector, useDispatch } from "react-redux";
import {
  setAuthToken,
  setEmail,
  setName,
  setPass,
  setUserId,
} from "../../store/userSlice";
import { ToastContainer, toast } from "react-toastify";

const UserState = (props) => {
  const host = "http://localhost:5000";
  const dispatch = useDispatch();

  const createUser = async (name, email, password) => {
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email, password: password }),
    });
    const data = await response.json();
    // console.log("Data:",data.authToken);
    dispatch(setAuthToken(data.authToken));
    // console.log(name);
    // console.log(email);
    // console.log(password);
    getUser(data);
  };
  const loginUser = async (email, password) => {
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    dispatch(setAuthToken(data.authToken));
    // console.log(name);
    // console.log(email);
    // console.log(password);
    console.log(data);
    getUser(data);
  };
  const getUser = async (token) => {
    console.log(token.authToken);
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token.authToken,
      },
    });
    const data = await response.json();
    dispatch(setUserId(data._id));
    dispatch(setName(data.name));
    dispatch(setEmail(data.email));
    console.log("getUser Data is called");
    console.log(data._id);
    console.log(data.email);
    console.log(data.name);
    console.log(data);
  };

  const logOut = () => {
    dispatch(setAuthToken(""));
    dispatch(setName(""));
    dispatch(setUserId(""));
    dispatch(setPass(""));
    dispatch(setEmail(""));
  };

  const notifyToastError = (msg) =>
    toast.error(msg, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyToast = (msg) =>
    toast(msg, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <UserContext.Provider
      value={{ createUser, loginUser, logOut, notifyToast, notifyToastError }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
