import React from "react";
import "./supportsection.css";
import Supportimg from "../../assets/images/green-heart.svg";

const SupportSection = () => {
  return (
    <section className="support-section">
      <div className=" container-grid grid grid-cols-1 md:grid-cols-12 items-center xl:px-24 pt-24 ">
        <div className="container-text col-span-6">
          <h1 className="title-section text-primary font-outfit font-bold">
            WHAT CAN WE DO?
          </h1>
          <div className="support-p pt-20 w-96 text-left font-red-hat-display">
            <p className="mb-3">
              Flight footprints shed light on the environmental impact of air
              travel, urging us to explore{" "}
              <span className="font-bold text-primary">
                eco-friendly alternatives.
              </span>
            </p>
            <p className="mb-3">
              From opting for airlines with lower emissions to embracing
              sustainable modes of transportation like trains or electric
              vehicles,{" "}
              <span className="font-bold text-primary">
                there's a world of greener choices awaiting adventurers.
              </span>
            </p>
            <p className="mb-3">
              By choosing these greener alternatives, travelers not only reduce
              their carbon footprint but also{" "}
              <span className="font-bold text-primary">
                contribute to the preservation of natural resources
              </span>{" "}
              and the protection of fragile ecosystems. <br />
            </p>
          </div>
        </div>
        <div className="img-support col-span-6 border-4 border-blue-600 flex items-center justify-center">
          <img src={Supportimg} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
