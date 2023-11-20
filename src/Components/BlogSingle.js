import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BlogData from "./BlogData";
import HeadTitle from "./HeadTitle";
import "./SinglePage.css";
import "./Blog.css";
import EmptyFile from "./EmptyFile";
function BlogSingle() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);
  return (
    <div>
      <HeadTitle />
      {item ? (
        <section className="single-page top">
          <div className="container">
            <Link to="/blog" className="primary-btn back">
              <i className="fas fa-long-arrow-alt-left"></i> Go Back
            </Link>
            <article className="content flex">
              <div className="main-content">
                <img src={item.cover} alt="" />
                <div className="category flexSB">
                  <span>{item.date}</span>
                  <label>{item.category}</label>
                </div>
                <h1> {item.title} </h1>
                <p>{item.desc}</p>
                <p>{item.desc}</p> <p>{item.desc}</p>
                <h2>Two Column Text Sample</h2>
                <div className="para flexSB">
                  <p>{item.para}</p>
                  <p>{item.para}</p>
                </div>
              </div>
              <div className="side-content">
                <div className="category-list">
                  <h1>Categories</h1>
                  <hr />
                  <ul>
                    {BlogData.map((item) => {
                      return (
                        <li>
                          <i className="far fa-play-circle"></i>
                          {item.category}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </div>
  );
}

export default BlogSingle;
