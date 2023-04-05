import React from "react";
import ParticlesBackground from "../ParticlesBackground";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <ParticlesBackground />
      <header className="page-header">
        <div className="header-logo">
          <img className="logo" src="website-logo.png" alt="facts image" />
          <h1 className="primary-heading underline">
            I discovered these today!
          </h1>
        </div>
        <div className="header-btns">
          <button className="btn btn-large btn-share">Tell us something</button>
          <button className="btn btn-large btn-login">Login</button>
          <button className="btn btn-large btn-close hidden">Close</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
