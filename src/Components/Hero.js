import React from "react";
import Data from "./Data";
import "./Hero.css";
import Slide from "./Slide";

const Hero = () => {
  return (
    <>
      <Slide slides={Data} />
    </>
  );
};

export default Hero;
