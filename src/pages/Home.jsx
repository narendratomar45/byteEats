import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DishesCarousel from "./DishesCarousel";
import AboutSection from "../Components/AboutSection";
import SpecialOffers from "../Components/SpecialOffers";
import HeroSection from "../Components/HEroSection";
import OurSpecial from "../Components/OurSpecial";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DishesCarousel />
      <AboutSection />
      <OurSpecial />
      <SpecialOffers />
      <Footer />
    </div>
  );
};

export default Home;
