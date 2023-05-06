import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import ParticlesBackground from "./../ParticlesBackground";

const Login = () => {
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");

  function handleChange(e) {
    setFormData(e.target.value);
  }

  // console.log(emailData, passwordData);
  return (
    <>
      <ParticlesBackground />
      <div className="login-parent">
        <div className="login-box">
          <h1>Login</h1>
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
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Don't have an account?Sign Up Here
              </Link>
            </div>
            <div className="btn-field">
              <button className="button" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
