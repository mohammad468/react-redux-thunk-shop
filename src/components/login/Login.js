import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchToken } from "../../redux/actions/loginAction";

//hot-toast
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //redux
  const loggedIn = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn.loggedIn && !loggedIn.loading) {
      console.log("success");
      toast.success("login successfully");
    } else if (!loggedIn.loggedIn && !loggedIn.loading && loggedIn.errorMsg) {
      console.log("failed");
      toast.error("login if failed");
    }
  }, [loggedIn]);

  return (
    <div>
      <h1>{loggedIn ? loggedIn.token.token : "not login"}</h1>
      <div className="d-flex justify-content-center">
        <div className="mx-1">
          <label class="form-label">username</label>
          <input
            onChange={(event) => setUserName(event.target.value)}
            type="text"
            class="form-control"
            placeholder="enter your username"
          />
        </div>
        <div className="mx-1">
          <label class="form-label">password</label>
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            class="form-control"
            placeholder="enter your password"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-grid gap-12 mt-2 w-25">
          <button
            className={
              loggedIn.loading
                ? "btn btn-primary block-btn disabled"
                : "btn btn-primary block-btn"
            }
            onClick={() => {
              dispatch(
                fetchToken({
                  username: userName,
                  password: password,
                })
              );
            }}
          >
            {loggedIn.loading ? (
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
              "login"
            )}
          </button>
        </div>
      </div>
      <Toaster position="top-left" reverseOrder={true} />
    </div>
  );
};

export default Login;
