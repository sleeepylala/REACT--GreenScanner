import React, { useEffect, useState } from "react";
import "./infosection.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Icon1 from "../../assets/images/icona-1.svg";
import Icon2 from "../../assets/images/icona-2.svg";
import Icon3 from "../../assets/images/icona-3.svg";

const InfoSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  }); // Utilizza useInView per rilevare la visibilità della sezione
  const [isVisible, setIsVisible] = useState(false); // Stato per gestire la visibilità dell'animazione

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section ref={ref} className="section-info bg-[#F9F9F9] ">
      <div className="flex p-10 justify-center text-center mt-24">
        <h1 className="title-section text-primary font-outfit font-bold">
          WHAT ARE THE <br />
          FLIGHT FOOTPRINTS?
        </h1>
      </div>
      <div className="container-icon  border-2font-red-hat-display">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center">
          <motion.div
            className="flex flex-col items-center space-y-10"
            initial={{ opacity: 0, y: 40 }} // Animazione iniziale
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }} // Controlla l'animazione in base a isVisible
            transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
          >
            <div className="container-img rounded-full bg-white p-8 w-80 h-80 flex justify-center items-center">
              <img src={Icon1} alt="" className="w-80 h-80" />
            </div>
            <p className="text-center w-80">
              Flight footprints are like the carbon footprint of your travels
              through the sky.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-10"
            initial={{ opacity: 0, y: 40 }} // Animazione iniziale
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }} // Controlla l'animazione in base a isVisible
            transition={{ ease: "easeOut", duration: 1, delay: 0.4 }}
          >
            <div className="container-img rounded-full bg-white p-8 w-80 h-80 flex justify-center items-center">
              <img src={Icon2} alt="" className="w-52 h-52" />
            </div>
            <p className="text-center w-80">
              They show the environmental impact of your flights, including
              greenhouse gas emissions.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-10"
            initial={{ opacity: 0, y: 40 }} // Animazione iniziale
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }} // Controlla l'animazione in base a isVisible
            transition={{ ease: "easeOut", duration: 1, delay: 0.6 }}
          >
            <div className="container-img rounded-full bg-white p-8 w-80 h-80 flex justify-center items-center">
              <img src={Icon3} alt="" className="w-40 h-40" />
            </div>
            <p className="text-center w-80">
              It's a way to understand and reduce the environmental consequences
              of air travel.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
