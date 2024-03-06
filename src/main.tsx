import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="d-flex flex-column gap-3 justify-content-center align-items-center vh-100 vw-100 ">
      <App />
    </div>
  </React.StrictMode>
);
