import "./SinglePage.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeadTitle from "./HeadTitle";
import { useParams } from "react-router-dom";
import SData from "./SData";
import EmptyFile from "./EmptyFile";

function SinglePage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = SData.find((item) => item.id === parseInt(id));
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
            <Link to="/destinations" className="primary-btn back">
              <i className="fas fa-long-arrow-alt-left"></i> Go Back
            </Link>
            <article className="content flex">
              <div className="main-content">
                <img src={item.image} alt="" />
                <p>{item.desc}</p>
                <p>{item.desc}</p>
                <div className="para flexSB">
                  <p>{item.sidepara}</p>
                  <p>{item.sidepara}</p>
                </div>
                <h1>Whta is the {item.title} City ?</h1>
                <p>{item.desc}</p>
                <div className="image grid1 ">
                  <img src="/images/singlepage/single-1.jpg" alt="" />
                  <img src="/images/singlepage/single-2.jpg" alt="" />
                </div>
              </div>
              <div className="side-content">
                <div className="box">
                  <h2>How can we help you?</h2>
                  <p>{item.sidepara}</p>
                  <button className="outline-btn">
                    <i className="fa fa-phone"></i> Contact Us
                  </button>
                </div>
                <div className="box2">
                  <p>{item.sidepara}</p>
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

export default SinglePage;
