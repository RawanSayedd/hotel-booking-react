import React from "react";

function TestCard({ item: { id, desc, name, profile, post } }) {
  return (
    <div>
      <div className="items">
        <i className="fa fa-quote-left"></i>
        <div className="para">
          <p>{desc}</p>
        </div>
        <hr />
        <div className="details flex">
          <div className="img">
            <img src={profile} alt="Profile Image" />
          </div>
          <div className="name">
            <h3>{name}</h3>
            <span>{post}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
