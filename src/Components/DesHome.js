import React from "react";
import "./Destination.css";
import SData from "./SData";
import DCards from "./DCards";
import "./Gallery.css";
import AllItem from "./AllItem";

function DesHome() {
  return (
    <div>
      <section className="popular top">
        <div className="full-container">
          <div className="heading">
            <h1>Most Popular Destinations</h1>
            <div className="line"></div>
          </div>
          <AllItem />
        </div>
      </section>
    </div>
  );
}

export default DesHome;
