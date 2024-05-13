import React from "react";
import Button from "../Button";

import "./home.css";

const Home = () => {
  return (
    <section id="home" className="section-home flex flex-col ">
      <div className="container-h1 font-outfit flex justify-center items-center  text-center">
        <h1 className="title-home">
          What is your <br />
          <span className="text-primary span-home">Flight Footprint?</span>
        </h1>
      </div>
      <div className="container-p flex justify-center font-red-hat-display">
        <p className="p-hero">
          calculate the <span className="font-bold">environmental impact</span>{" "}
          of your air travel
        </p>
      </div>
      <div className="container-btn flex justify-center items-center mt-40">
        <Button href="#calculate" />
      </div>
    </section>
  );
};

export default Home;
