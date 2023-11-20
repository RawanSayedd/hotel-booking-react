import React, { useState } from "react";
import TestCard from "./TestCard";
import "./Test.css";
import TData from "./TData";

function AllTestimonial() {
  const [items, setIems] = useState(TData);

  return (
    <div>
      <section className="testimonial  mtop">
        <div className="container">
          <div className="content grid1">
            {items.map((item) => {
              return <TestCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllTestimonial;
