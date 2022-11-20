import React, { useEffect, useState } from "react";
import "./Signup.css";

//redux
import { fetchToken } from "../../redux/actions/signupAction";
import { useDispatch, useSelector } from "react-redux";

//hot-toast
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //redux
  const signedUp = useSelector((state) => state.signup);
  const dispatch = useDispatch();

  useEffect(() => {
    if (signedUp.signedIn && !signedUp.loading) {
      console.log("signup success");
      toast.success("signup successfully");
    } else if (!signedUp.signedIn && !signedUp.loading && signedUp.errorMsg) {
      console.log("signup failed");
      toast.error(signedUp.errorMsg.message);
    }
  }, [signedUp]);

  console.log("signedUp", signedUp);
  return (
    <>
      <h1 className="text-center">hello Signup</h1>
      <h1>{signedUp ? signedUp.token.token : "not login"}</h1>
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center w-50 bg-light rounded-3">
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
              type="text"
              class="form-control"
              placeholder="enter your password"
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-grid gap-12 mt-2 w-25">
          <button
            className={
              signedUp.loading
                ? "btn btn-primary block-btn disabled"
                : "btn btn-primary block-btn"
            }
            onClick={() =>
              dispatch(
                fetchToken({
                  username: userName,
                  password: password,
                })
              )
            }
          >
            {signedUp.loading ? (
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
    </>
  );
};

export default Signup;
