import React from "react";

import "./Home.css";
import Nav from "../../components/Navigation/Nav";
import Hero from "../../components/Home/Hero";
import Statistics from "../../components/Home/About";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <div className="home__component">
        <Nav />
        <Hero />
      </div>
      <Statistics />
      <Footer />
    </>
  );
};

export default Home;
