import React from "react";
import { motion } from "framer-motion";

const Button = ({ href, onSubmit }) => {
  const handleClick = (e) => {
    if (typeof onSubmit === "function") {
      onSubmit(e);
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="bg-primary btn-hero border-white border-2 rounded-full py-5 lg:px-20 px-10  text-white font-red-hat-display"
      whileTap={{ scale: 0.8 }} // Imposta l'animazione quando il tasto è premuto
      whileHover={{ scale: 1.2 }} // Imposta l'animazione quando il tasto è in hover
    >
      calculate now
    </motion.a>
  );
};

export default Button;
