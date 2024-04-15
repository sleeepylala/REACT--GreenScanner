import React from "react";
import logo from "../assets/images/logo.svg";
import { HiMiniHome } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="fixed  w-full bg-white flex h-20 border-green-600 border-2 justify-between items-center">
      <div className="ps-32">
        <img src={logo} alt="logo" />
      </div>
      <div className="pe-32">
        <a href="#home">
          <HiMiniHome
            style={{
              color: "#00BFA6",
              fontSize: "30px",
            }}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
