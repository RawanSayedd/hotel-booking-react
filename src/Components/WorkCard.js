import React from "react";
import "./Work.css";

function WorkCard({ item: { id, desc, cover, title } }) {
  return (
    <div>
      <div className="box">
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <div className="details">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
