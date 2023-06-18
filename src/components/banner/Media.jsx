import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiVuedotjs, SiNodedotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Meilleures compétences
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
          <span className="bannerIcon">
            <SiVuedotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
