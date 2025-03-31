import React from "react";
// import heroImage from "../assets/images/heroImage.jpg";
import heroVideo from "../assets/videos/heroVideo.mp4";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div>
      <div className="relative w-full h-[75vh]">
        {/* <img
          src={heroImage}
          alt="Hero Section"
          className="w-full h-full object-cover brightness-75"
        /> */}
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full  object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            ByteEats
          </h1>

          <h2 className="text-3xl font-bold text-white duration-500">
            <TypeAnimation
              sequence={[
                "Explore the finest food and beverages in Delhi NCR",
                2000,
                "Delicious Dishes, Unforgettable Flavors!",
                2000,
                "Your Food Adventure Starts Here!",
                2000,
              ]}
              repeat={Infinity}
              speed={10}
              wrapper="span"
            />
          </h2>

          <button className="mt-6 bg-orange-500 px-6 py-3 font-bold text-white rounded-full shadow-xl text-lg hover:bg-orange-600 transition-all duration-300">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
