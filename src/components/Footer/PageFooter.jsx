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
        <p className="copyright-message">Copyright (©️) 2023 Kshitij Gupta</p>
      </div>
      <div className="footer-icons">
        <a
          className="footer-icons-a"
          href="https://github.com/guptakshitij2308/facto-mania"
          target="_blank"
        >
          <GitHubIcon className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/kshitij-gupta-362aa1227/"
          target="_blank"
        >
          <LinkedInIcon className="footer-icon" />
        </a>
        <a href="https://www.facebook.com/U.Get.Kshitij/" target="_blank">
          <FacebookIcon className="footer-icon" />
        </a>
        <a href="https://www.instagram.com/guptakshitijkumar_/" target="_blank">
          <InstagramIcon className="footer-icon" />
        </a>
      </div>
    </div>
  );
};

export default PageFooter;
