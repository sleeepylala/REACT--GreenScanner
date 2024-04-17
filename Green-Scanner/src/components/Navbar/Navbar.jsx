import React from "react";
import logo from "../../assets/images/logo.svg";
import "./navbar.css";
import { HiMiniHome } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className=" bg-white flex h-20 border-green-600 border-2 justify-around items-center">
      <img src={logo} alt="logo" className="logo" />

      <a href="#home">
        <HiMiniHome
          style={{
            color: "#00BFA6",
            fontSize: "30px",
          }}
        />
      </a>
    </nav>
  );
};

export default Navbar;
