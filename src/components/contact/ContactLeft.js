import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import code from "../../assets/code.jpg";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={code}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mamadou Sy</h3>
        <p className="text-lg font-normal text-gray-400">
          Developpeur web Full Stack
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Vous recherchez un développeur web Full Stack compétent et passionné ?
          Ne cherchez plus !
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Appelez-moi: <span className="text-lightText">+212 645456531</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mamadousy1254@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">
          Trouvez-moi sur
        </h2>
        <div className="flex gap-4">
          <span
            className="bannerIcon"
            onClick={() => window.open("https://github.com/dmx1254")}
          >
            <FaGithub />
          </span>
          <span
            className="bannerIcon"
            onClick={() => window.open("https://twitter.com/mamadousyy")}
          >
            <FaTwitter />
          </span>
          <span
            className="bannerIcon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/mamadou-sy-8a02251a6/")
            }
          >
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
