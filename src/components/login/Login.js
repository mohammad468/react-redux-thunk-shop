import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchToken } from "../../redux/actions/loginAction";

const Login = () => {
  const loggedIn = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("loggedIn", loggedIn);
  useEffect(() => {
    dispatch(
      fetchToken({
        username: "admin",
        password: "admin",
      })
    );
  }, []);

  return (
    <div>
      <h1>{loggedIn ? loggedIn.login.token.token : "not login"}</h1>
    </div>
  );
};

export default Login;
