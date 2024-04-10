import React from "react";

import "./home.css";

const Home = () => {
  return (
    <div>
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
            calculate the{" "}
            <span className="font-bold">environmental impact</span> of your air
            travel
          </p>
        </div>
        <div className="container-btn flex justify-center items-center mt-40">
          <button className="bg-primary btn-hero border-white border-2 rounded-full py-5 px-20 text-white font-red-hat-display">
            calculate now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
