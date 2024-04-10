import React from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex h-20 border-green-600 border-2 justify-start items-center">
      <div className="ps-5">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
