import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import ParticlesBackground from "./../ParticlesBackground";

const Login = () => {
  const login = async () => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: "someone@email.com",
      password: "wYhwMOucClzBbQbvWNYZ",
    });
  };
  return (
    <>
      <ParticlesBackground />
      <div className="login-parent">
        <div className="login-box">
          <h1>Login</h1>
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
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Don't have an account?Sign Up Here
              </Link>
            </div>
            <div className="btn-field">
              <button className="button">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
