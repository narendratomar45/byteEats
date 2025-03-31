import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DishesCarousel from "./DishesCarousel";
import AboutSection from "../Components/AboutSection";
import SpecialOffers from "../Components/SpecialOffers";
import HeroSection from "../Components/HeroSection";
import OurSpecial from "../Components/OurSpecial";
import Testimonial from "../Components/Testimonial";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DishesCarousel />
      <AboutSection />
      <OurSpecial />
      <SpecialOffers />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
