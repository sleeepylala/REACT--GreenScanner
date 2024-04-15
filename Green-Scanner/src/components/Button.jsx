import React from "react";

const Button = ({ href }) => {
  return (
    <a
      href={href}
      className="bg-primary btn-hero border-white border-2 rounded-full py-5 px-20 text-white font-red-hat-display"
    >
      calculate now
    </a>
  );
};

export default Button;
