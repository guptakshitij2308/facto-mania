import "./styles.css";

import { Route, Routes, BrowserRouter as Router, json } from "react-router-dom";

import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import PageFooter from "./components/Footer/PageFooter";
import Home from "./components/Pages/Home";

import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home token={token} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      <PageFooter />
    </div>
  );
}

export default App;
