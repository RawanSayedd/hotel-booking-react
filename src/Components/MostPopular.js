import React from "react";
import "./MostPopular.css";
import PopCards from "./PopCards";

function MostPopular() {
  return (
    <div>
      <section className="popular top">
        <div className="full-container">
          <div className="heading">
            <h1>Most Popular Hotels</h1>
            <div className="line"></div>
          </div>
          <div className="content">
            <PopCards />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MostPopular;
