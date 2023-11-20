import React, { useState } from "react";
import "./Gallery.css";

function GalleryCard(props) {
  const [popup, setPopup] = useState(false);

  const toggleModal = () => {
    setPopup(!popup);
  };

  return (
    <div>
      <div className="items">
        <div className="img">
          <img src={props.images} alt="Gallery Image" />
          <i className="fas fa-image" onClick={toggleModal}></i>
        </div>
        <div className="title">
          <h3>{props.title} </h3>
        </div>
      </div>
      {popup && (
        <div className="popup">
          <div className="hide">
            <div className="popup-content">
              <button onClick={toggleModal}>Close</button>
              <img src={props.images} alt="Gallery Image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryCard;
