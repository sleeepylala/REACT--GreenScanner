import React from "react";

const Button = ({ href, onSubmit }) => {
  const handleClick = (e) => {
    if (typeof onSubmit === "function") {
      onSubmit(e);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="bg-primary btn-hero border-white border-2 rounded-full py-5 lg:px-20 px-10  text-white font-red-hat-display"
    >
      calculate now
    </a>
  );
};

export default Button;
