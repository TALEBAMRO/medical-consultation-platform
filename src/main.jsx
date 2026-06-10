import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App";
import "./i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import {ThemeProvider} from "./context/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
        <App />
        </ThemeProvider>
    </React.StrictMode>
);