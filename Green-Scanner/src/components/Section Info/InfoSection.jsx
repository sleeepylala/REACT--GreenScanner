import React from "react";
import "./infosection.css";
import Icon1 from "../../assets/images/icona-1.svg";
import Icon2 from "../../assets/images/icona-2.svg";
import Icon3 from "../../assets/images/icona-3.svg";

const InfoSection = () => {
  return (
    <section className="section-info bg-[#F9F9F9] ">
      <div className="flex justify-center text-center mt-24">
        <h1 className="title-section text-primary font-outfit font-bold">
          WHAT ARE THE <br />
          FLIGHT FOOTPRINTS?
        </h1>
      </div>
      <div className="container-icon mt-16 border-2 border-blue-500 font-red-hat-display">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          <div className="flex flex-col items-center space-y-10">
            <div className="rounded-full bg-white p-8 w-80 h-80 flex justify-center items-center">
              <img src={Icon1} alt="" className="w-80 h-80" />
            </div>
            <p className="text-center w-80">
              Flight footprints are like the carbon footprint of your travels
              through the sky.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-10">
            <div className="rounded-full bg-white p-8 w-80 h-80 flex justify-center items-center">
              <img src={Icon2} alt="" className="w-52 h-52" />
            </div>
            <p className="text-center w-80">
              They show the environmental impact of your flights, including
              greenhouse gas emissions.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-10">
            <div className="rounded-full bg-white p-8 w-80 h-80 flex justify-center items-center">
              <img src={Icon3} alt="" className="w-40 h-40" />
            </div>
            <p className="text-center w-80">
              It's a way to understand and reduce the environmental consequences
              of air travel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
