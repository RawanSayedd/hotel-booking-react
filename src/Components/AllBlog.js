import React, { useState } from "react";
import "./Blog.css";
import BlogData from "./BlogData";
import BlogCard from "./BlogCard";

function AllBlog() {
  const [items, setIems] = useState(BlogData);

  return (
    <div>
      <section className="blog mtop">
        <div className="container">
          <div className="content grid">
            {items.map((item) => {
              return <BlogCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllBlog;
