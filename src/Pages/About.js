import React from "react";
import AboutCard from "../Components/AboutCard";
import "../Components/About.css";
import HeadTitle from "../Components/HeadTitle";

function About() {
  return (
    <div>
      <HeadTitle />
      <section className="about top">
        <div className="container">
          <AboutCard />
        </div>
      </section>
      <section className="feature top">
        <div className="container">
          <div className="about-card flexSB">
            <div className="row row1">
              <h1>
                Our <span>Features</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit amet
                consectetur piscing elit amet consectetur adipiscing elit sed et
                eletum nulla eu placerat felis etiam tincidunt orci lacus id
                varius dolor fermum sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit amet
                consectetur piscing elit amet consectetur adipiscing elit sed et
                eletum nulla eu placerat felis etiam tincidunt orci lacus id
                varius dolor fermum sit amet.
              </p>
              <button type="submit" class=" secondary-btn">
                Explore More <i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
            <div className="row img">
              <img src="/images/feature-img-1.jpg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
