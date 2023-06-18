import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 py-10">
      <p className="text-center text-gray-500 text-base">
        © 2023. Tous droits reserves á Mamadou Sy
      </p>
      {/* <div className="flex gap-12">
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
      </div> */}
    </div>
  );
};

export default FooterBottom;
