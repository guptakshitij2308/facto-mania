import React from "react";
import ParticlesBackground from "../ParticlesBackground";
import "./Header.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

import LockPersonIcon from "@mui/icons-material/LockPerson";
import CancelIcon from "@mui/icons-material/Cancel";

const Header = ({ showForm, setShowForm }) => {
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
          <button
            onClick={() => setShowForm((show) => !show)}
            className="btn btn-large btn-share"
          >
            {showForm ? "Close" : "Share a fact"}
            {showForm ? (
              <CancelIcon className="icon" />
            ) : (
              <LibraryBooksIcon className="icon" />
            )}
          </button>
          <button className="btn btn-large btn-login">
            Login <LockPersonIcon className="icon" />
          </button>
          <button className="btn btn-large btn-close hidden">Close</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
