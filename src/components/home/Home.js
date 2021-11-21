import React from "react";
import Advantages from "./Advantages";
import CreatePage from "./Createpage";
import Getstarted from "./Getstarted";
import Hero from "./Hero";
import Ready from "./Ready";
import Showcase from "./Showcase";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Showcase />
      <Advantages />
      <Testimonial />
      <Getstarted />
      <CreatePage />
      <Ready />
    </div>
  );
};

export default Home;
