import React, { useState } from "react";
import "./Work.css";
import "./MostPopular.css";
import WData from "./WData";
import WorkCard from "./WorkCard";

function Work() {
  const [items, setIems] = useState(WData);

  return (
    <div>
      <section className="popular works">
        <div className="container">
          <div className="heading">
            <h1>How it Works </h1>
            <div className="line"></div>
          </div>
          <div className="content grid">
            {items.map((item) => {
              return <WorkCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
