import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App.jsx";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
