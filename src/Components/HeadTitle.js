import React from "react";
import "./HeadTitle.css";
import { Link, useLocation } from "react-router-dom";

function HeadTitle() {
  const location = useLocation();

  return (
    <div>
      <section className="images-heading">
        <div className="container">
          <h1>{location.pathname.split("/")[1]}</h1>
        </div>
        <button>
          <Link to="/"> Home / </Link>
          <span>{location.pathname.split("/")[1]}</span>
        </button>
      </section>
    </div>
  );
}

export default HeadTitle;
