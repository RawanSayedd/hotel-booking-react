import React, { useState } from "react";
import DCards from "./DCards";
import SData from "./SData";
import "./Gallery.css";
import "./Destination.css";

function AllItem() {
  const [items, setIems] = useState(SData);

  return (
    <div>
      <section className="gallery desi mtop">
        <div className="container">
          <div className="content grid">
            {items.map((item) => {
              return <DCards key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllItem;
