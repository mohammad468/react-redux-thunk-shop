import React from "react";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

//router dom
import { Route, Routes } from "react-router-dom";

//components
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Provider>
    </>
  );
}

export default App;
