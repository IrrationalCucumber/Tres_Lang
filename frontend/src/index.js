import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Footer from "./components/Footer/Footer";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
