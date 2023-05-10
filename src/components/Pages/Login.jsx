import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import ParticlesBackground from "./../ParticlesBackground";
import supabase from "./../../supabase.js";
import GoogleIcon from "@mui/icons-material/Google";

const Login = ({ setToken }) => {
  let navigate = useNavigate();

  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");

  async function loginWithGoogle() {
    // e.preventDefault();
    try {
      let { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;

      if (data) setToken(data);
      // navigate("/");
      console.log(data);
    } catch (error) {
      alert(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailData,
        password: passwordData,
      });
      if (error) throw error;

      // console.log(data);
      setToken(data);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }

  // console.log(emailData, passwordData);

  return (
    <>
      <ParticlesBackground />
      <div className="login-parent">
        <div className="login-box">
          <h1>Login</h1>
          <form className="form-login" onSubmit={handleSubmit}>
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
          <div className="btn-field ">
            <button
              className="button google-signin"
              type="submit"
              onClick={loginWithGoogle}
            >
              <GoogleIcon className="g-icon" />
              <div>Signin</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
