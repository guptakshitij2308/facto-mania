import React from "react";
import ParticlesBackground from "../ParticlesBackground";
import "./Header.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

import LockPersonIcon from "@mui/icons-material/LockPerson";
import CancelIcon from "@mui/icons-material/Cancel";

import { Link, useNavigate } from "react-router-dom";

const Header = ({ showForm, setShowForm, token }) => {
  let navigate = useNavigate();

  function handleClick() {
    if (token) setShowForm((show) => !show);
    else alert("Please log in to share a new fact");
  }

  function handleLogout() {
    sessionStorage.removeItem("token");

    navigate("/");
    // location.reload();
    navigate(0);
  }

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
          <button onClick={handleClick} className="btn btn-large btn-share">
            {showForm && token ? "Close" : "Share a fact"}
            {showForm && token ? (
              <CancelIcon className="icon" />
            ) : (
              <LibraryBooksIcon className="icon" />
            )}
          </button>

          {token ? (
            <button className="btn btn-large btn-login" onClick={handleLogout}>
              <div className="btn-login-link">
                <Link to="/">
                  Logout <LockPersonIcon className="icon" />
                </Link>
              </div>
            </button>
          ) : (
            <button className="btn btn-large btn-login">
              <div className="btn-login-link">
                <Link to="/login">
                  Login <LockPersonIcon className="icon" />
                </Link>
              </div>
            </button>
          )}

          <button className="btn btn-large btn-close hidden">Close</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
