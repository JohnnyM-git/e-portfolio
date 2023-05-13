import React from "react";
import FooterLogo from "../assets/JMLogo.svg";
import { MdOutlineArrowUpward } from "react-icons/md";
import resume from "../assets/JohnnyMartensResume.pdf"

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <a href="#" className="footer__logo">
        <img src={FooterLogo} alt="" />
        <span className="footer__scroll-top">
          Top <MdOutlineArrowUpward />
        </span>
      </a>
      <div className="footer__link--wrapper">
        <div>
          <a href="https://github.com/JohnnyM-git" target="_blank">Github</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/johnny-martens-71537420a" target="_blank">LinkedIn</a>
        </div>
        <div>
          <a href="mailto:johnny@johnnym.me">Email</a>
        </div>
        <div>
          <a href={resume} target="_blank">Resume</a>
        </div>
      </div>
      <div>Copyright &copy; 2023 Johnny Martens</div>
    </div>
  );
};

export default Footer;
