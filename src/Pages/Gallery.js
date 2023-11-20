import React from "react";
import "../Components/Gallery.css";
import GalleryCard from "../Components/GalleryCard";
import HeadTitle from "../Components/HeadTitle";
import GalleryData from "../Components/GalleryData";

function Gallery() {
  return (
    <div>
      <HeadTitle />
      <section className="gallery top">
        <div className="container grid">
          {GalleryData.map((value) => {
            return <GalleryCard images={value.img} title={value.title} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
