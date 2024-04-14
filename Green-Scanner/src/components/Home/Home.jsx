import React from "react";
import Button from "../Button";

import "./home.css";

const Home = () => {
  return (
    <section className="section-home flex flex-col">
      <div className="container-h1 font-outfit flex justify-center items-center flex-row border-4 border-blue-500 mt-16 text-center">
        <h1 className="title-home mb-0">
          What is your <br />
          <span className="text-primary mt-0  span-home">
            Flight Footprint?
          </span>
        </h1>
      </div>
      <div className="container-p flex justify-center font-red-hat-display">
        <p className="p-hero">
          calculate the <span className="font-bold">environmental impact</span>{" "}
          of your air travel
        </p>
      </div>
      <div className="container-btn flex justify-center items-center mt-40">
        <Button />
      </div>
    </section>
  );
};

export default Home;
