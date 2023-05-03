import React from "react";
import "./PageFooter.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const PageFooter = () => {
  return (
    <div className="page-footer">
      {/* <div className="copyright">
        <img className="footer-logo" src="./../../../public/website-logo.png" />
        <p className="copyright-message">Copyright (©️) 2023 Facto-Mania</p>
      </div> */}
      {/* <p className="footer-message">Contact Me</p> */}
      <div className="copyright">
        <img className="footer-logo" src="./website-logo.png" />
        <p className="copyright-message">Copyright (©️) 2023 Facto-Mania</p>
      </div>
      <div className="footer-icons">
        <GitHubIcon className="footer-icon" />
        <LinkedInIcon className="footer-icon" />
        <FacebookIcon className="footer-icon" />
        <InstagramIcon className="footer-icon" />
      </div>
    </div>
  );
};

export default PageFooter;
