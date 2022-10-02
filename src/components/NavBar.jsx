import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  let commonCss =
    "w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-10px] duration-300";
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="cursor-pointer">
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="logo-image" style={{ width: "70px" }} />
        </Link>
      </div>
      {/* Menu */}
      {/* <div className="hidden md:flex"> */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* </div> */}
      {/* Hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-8">
        <ul>
          <li className={`${commonCss} bg-blue-600`}>
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://www.linkedin.com/in/prince-rajput-a72853196/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className={`${commonCss} bg-[#333333]`}>
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://github.com/Prince081996"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className={`${commonCss} bg-[#6fc2b0]`}>
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="mailto:princerajput0021@gail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className={`${commonCss} bg-[#565f69]`}>
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://drive.google.com/file/d/1Q-lLcPAUGSGVW7DD1YHXwnSrh4od4PS3/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
