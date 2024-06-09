import React from "react";
import ReactDOM from "react-dom/client";

import Content from "./components/Content";
import "./assets/global.css";
import "./assets/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>
);
