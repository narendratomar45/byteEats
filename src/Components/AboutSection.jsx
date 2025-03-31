import React from "react";
// import dinningArea from "../assets/images/dinningArea.jpg";
import aboutVideo from "../assets/videos/aboutVideo.mp4";
const AboutSection = () => {
  return (
    <div className="w-full mx-auto bg-gray-200 p-10   text-white my-5  bg-gradient-to-r from-orange-50 to-red-100 ">
      <h2 className="w-full text-5xl font-extrabold text-center text-orange-500 mb-6 ">
        Welcome to ByteEats
      </h2>
      <div className="flex flex-col md:flex-row  items-center gap-8 bg-white  rounded-2xl shadow-2xl border border-black">
        <div className="md:w-1/2 text-center md:text-left ">
          <p className="text-lg leading-relaxed text-black ml-5">
            Where passion meets flavor! Established in 2025, we take pride in
            serving delicious, handcrafted dishes made from the freshest
            ingredients. Whether you're here for a cozy dinner, a family
            gathering, or a quick bite, we promise an unforgettable culinary
            adventure.
          </p>
        </div>

        <div className="md:w-1/2 relative overflow-hidden rounded-r-2xl shadow-lg">
          {/* <img
            src={dinningArea}
            alt="Dinning Area"
            className="w-full h-auto transform transition-transform duration-500 hover:scale-105 hover:brightness-110 rounded-r-2xl"
          /> */}
          <video
            src={aboutVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-r-2xl object-cover"
          />
        </div>
      </div>
      <button className=" flex bg-orange-500 px-4 py-2 my-5 rounded shadow-2xl font-bold mx-auto ">
        Read More About Us
      </button>
    </div>
  );
};

export default AboutSection;
