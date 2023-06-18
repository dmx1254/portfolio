import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import msypro from "../../assets/profiles/msypro03.JPG";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <Link to="home">
          <img
            src={msypro}
            alt="logo"
            className="h-[50px] w-[50px] bg-cover bg-center rounded-full"
          />
        </Link>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-lg font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img
                  className="h-[50px] w-[50px] bg-cover bg-center rounded-full"
                  src={msypro}
                  alt="logo"
                />
                <p className="text-sm text-gray-400 mt-2">
                  Développeur web et mobile passionné, spécialisé dans la
                  création d'applications performantes. Expérimenté dans les
                  technologies front-end telles que React js et Vue js, ainsi
                  que dans le développement d'applications mobiles avec React
                  Native.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
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
                    onClick={() =>
                      window.open("https://twitter.com/mamadousyy")
                    }
                  >
                    <FaTwitter />
                  </span>
                  <span
                    className="bannerIcon"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/mamadou-sy-8a02251a6/"
                      )
                    }
                  >
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
