import React from "react";
import Hero from "../Components/Hero";
import HAbout from "../Components/HAbout";
import DesHome from "../Components/DesHome";
import MostPopular from "../Components/MostPopular";
import Download from "../Components/Download";
import Work from "../Components/Work";
import HomeGal from "../Components/HomeGal";

function Home() {
  return (
    <div>
      <Hero />
      <HAbout />
      <MostPopular />
      <DesHome />
      <Download />
      <Work />
      <HomeGal />
    </div>
  );
}

export default Home;
