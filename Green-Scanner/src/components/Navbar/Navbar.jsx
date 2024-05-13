import React from "react";
import logo from "../../assets/images/logo.svg";
import "./navbar.css";
import { HiMiniHome } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="fixed w-full  bg-white flex h-20 z-20  justify-between lg:ps-16 lg:pe-16 pe-5 items-center">
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
