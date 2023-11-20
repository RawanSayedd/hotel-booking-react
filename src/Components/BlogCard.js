import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ item: { id, date, category, title, cover, para, desc } }) {
  return (
    <div>
      <div className="items">
        <div className="img">
          <img src={cover} alt="Gallery Image" />
        </div>
        <div className="category flexSB">
          <span>{date}</span>
          <label>{category}</label>
        </div>
        <div className="details">
          <h3>{title}</h3>
          <p>{para}</p>
        </div>
        <Link to={`/blogsingle/${id}`} className="blogItem-link">
          READ MORE <i className="fa fa-long-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
