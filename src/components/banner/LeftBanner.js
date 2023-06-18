import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Developpeur web Full Stack", "Developpeur mobile"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4> */}
        <h1 className="text-6xl font-bold text-white">
          Bonjour, je suis{" "}
          <span className="text-designColor capitalize">Mamadou SY</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Développeur web et mobile passionné, spécialisé dans la création
          d'applications performantes. Expérimenté dans les technologies
          front-end telles que React js et Vue js, ainsi que dans le
          développement d'applications mobiles avec React Native. Solides
          compétences en backend avec Node js, express js et Nest js, je suis prêt à relever
          de nouveaux défis pour offrir des expériences utilisateur
          exceptionnelles.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
