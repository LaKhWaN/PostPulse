import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing all CSS
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/bs-theme-overrides.css";
import "./assets/css/Profile-Picture-With-Badge-profile-pic-with-badge.css";
import "./assets/css/Profile-Picture-With-Badge.css";
import "./assets/css/custom.css";

// Importing all JS
import "./assets/bootstrap/js/bootstrap.min.js";
import "./assets/js/bold-and-dark.js";
import "./assets/js/bs-init.js";

// Importing all CSS
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/bs-theme-overrides.css";
import "./assets/css/Profile-Picture-With-Badge-profile-pic-with-badge.css";
import "./assets/css/Profile-Picture-With-Badge.css";
import "./assets/css/custom.css";

// Importing all JS
import "./assets/bootstrap/js/bootstrap.js";
import "./assets/js/bold-and-dark.js";
import "./assets/js/bs-init.js";

// Components
import Feed from "./components/Feed.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Nav from "./components/Navigation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route element={<Feed />} path="/"></Route>
        <Route element={<Feed />} path="/feed"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Register />} path="/register"></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
