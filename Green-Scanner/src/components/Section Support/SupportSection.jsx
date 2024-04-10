import React from "react";
import "./supportsection.css";
import Supportimg from "../../assets/images/green-heart.svg";

const SupportSection = () => {
  return (
    <section className="support-section px-24 ">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center mt-24 px-24">
        <div className="col-span-6">
          <h1 className="title-section text-primary font-outfit font-bold">
            WHAT CAN WE DO?
          </h1>
          <p className="support-p mt-24 w-96 text-left font-red-hat-display">
            Flight footprints shed light on the environmental impact of air
            travel, urging us to explore eco-friendly alternatives. <br />
            From opting for airlines with lower emissions to embracing
            sustainable modes of transportation like trains or electric
            vehicles, there's a world of greener choices awaiting adventurers.{" "}
            <br />
            By choosing these greener alternatives, travelers not only reduce
            their carbon footprint but also contribute to the preservation of
            natural resources and the protection of fragile ecosystems. <br />
          </p>
        </div>
        <div className="col-span-6 border-4 border-blue-600 flex items-center justify-center">
          <img src={Supportimg} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
