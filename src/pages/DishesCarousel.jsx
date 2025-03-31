import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import alooParatha from "../assets/images/alooParatha.webp";
import burger from "../assets/images/burgur.jpg";
import cake from "../assets/images/cake.jpg";
import chholeBhature from "../assets/images/chholeBhature.jpg";
import dosa from "../assets/images/dosa.jpg";
import iceCream from "../assets/images/iceCream.webp";
import noodles from "../assets/images/noodles.jpg";
import paneer from "../assets/images/paneer.jpg";
import pavbhaji from "../assets/images/pavbhaji.jpg";
import pizza from "../assets/images/pizza.jpg";
import rolls from "../assets/images/rolls.jpg";
import salad from "../assets/images/salad.jpg";
import shakes from "../assets/images/shakes.webp";
import southIndian from "../assets/images/southIndian.jpeg";

const DishesCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const foodItems = [
    { name: "Aloo Paratha", image: alooParatha },
    { name: "Burger", image: burger },
    { name: "Cake", image: cake },
    { name: "Chhole Bhature", image: chholeBhature },
    { name: "Dosa", image: dosa },
    { name: "Ice Cream", image: iceCream },
    { name: "Noodles", image: noodles },
    { name: "Paneer", image: paneer },
    { name: "Pav Bhaji", image: pavbhaji },
    { name: "Pizza", image: pizza },
    { name: "Rolls", image: rolls },
    { name: "Salad", image: salad },
    { name: "Shakes", image: shakes },
    { name: "South Indian", image: southIndian },
  ];

  return (
    <div className="py-10 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Popular Dishes
      </h2>
      <Slider {...settings}>
        {foodItems.map((item, index) => (
          <div key={index} className="px-3 bg-white">
            <div className="w-44 h-44 md:w-52 md:h-52 flex flex-col justify-evenly items-center rounded-xl  overflow-hidden bg-orange-100  transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-orange-700">
              <img
                src={item.image}
                alt={item.name}
                className="w-36 h-36 md:w-40 md:h-40 object-cover rounded-lg shadow-2xl"
              />
              <p className="text-center text-lg font-semibold  text-gray-800">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DishesCarousel;
