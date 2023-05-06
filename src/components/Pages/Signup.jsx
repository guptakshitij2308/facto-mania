import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import ParticlesBackground from "./../ParticlesBackground";

const Signup = () => {
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");

  function handleChange(e) {
    setFormData(e.target.value);
  }
  return (
    <>
      <ParticlesBackground />
      <div className="login-parent">
        <div className="login-box">
          <h1>Sign Up</h1>
          <form action="#">
            <div className="input-field">
              <PersonIcon />
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmailData(e.target.value)}
                name="email"
              />
            </div>
            <div className="input-field">
              <KeyIcon />
              <input
                type="Password"
                placeholder="Password"
                onChange={(e) => setPasswordData(e.target.value)}
                name="password"
              />
            </div>
            <div className="link">
              <Link to="/login" style={{ textDecoration: "none" }}>
                Already have an account?Sign In
              </Link>
            </div>
            <div className="btn-field">
              <button className="button">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
