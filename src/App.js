import React from "react";
import "./App.css";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

//components
import Login from "./components/login/Login";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
      </div>
    </Provider>
  );
}

export default App;
