import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import ParticlesBackground from "./../ParticlesBackground";
import supabase from "./../../supabase.js";

const Signup = () => {
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: emailData,
        password: passwordData,
      });
      if (error) throw error;

      alert("Check your email for verification link");
    } catch (error) {
      alert(error);
    }
  }

  console.log(emailData, passwordData);

  return (
    <>
      <ParticlesBackground />
      <div className="login-parent">
        <div className="login-box">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
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
