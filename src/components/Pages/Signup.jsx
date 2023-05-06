import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import ParticlesBackground from "./../ParticlesBackground";

const Signup = () => {
  const signup = async () => {
    let { data, error } = await supabase.auth.signUp({
      email: "someone@email.com",
      password: "wYhwMOucClzBbQbvWNYZ",
    });
  };
  return (
    <>
      <ParticlesBackground />
      <div className="login-parent">
        <div className="login-box">
          <h1>Sign Up</h1>
          <form action="#">
            <div className="input-field">
              <PersonIcon />
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <KeyIcon />
              <input type="Password" placeholder="Password" />
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
