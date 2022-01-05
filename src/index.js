import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./components/main";

const base = (  
  <div className="base">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div>
      <Main />
    </div>
  </div>
);

ReactDOM.render(
  <React.StrictMode>{base}</React.StrictMode>,
  document.getElementById("root")
);
