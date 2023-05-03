import "./styles.css";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import PageFooter from "./components/Footer/PageFooter";

import Home from "./components/Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      <PageFooter />
    </div>
  );
}

export default App;
