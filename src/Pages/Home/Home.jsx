import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import AboutUs from "./Section/AboutUs";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      
      <div className="max-w-7xl space-y-14 mx-auto">
        <Banner></Banner>
        <AboutUs></AboutUs>
        <Services></Services>
      </div>
      
    </>
  );
};

export default Home;
