// Home.jsx

import React from "react";
import "../components/Styles/Home.css"
import bannerImage from "../Assets/banner.jpg";

function Home() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Adventure Banner" className="banner-image" />
      <div className="banner-content">
        <div className="banner-message">
          <p>WELCOME ADVENTURERS</p>
        </div>
        <button className="button">Start Your Adventure</button>
      </div>

      </div>
  );
}

export default Home;
