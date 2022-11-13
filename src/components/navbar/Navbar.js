import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-center">
      <Link className="mx-1" to="/">
        home
      </Link>
      <Link className="mx-1" to="/login">
        login
      </Link>
      <Link className="mx-1" to="/signup">
        signup
      </Link>
    </div>
  );
};

export default Navbar;
