import React from "react";
import paneerTikka from "../assets/images/paneerTikka.jpg";
import maghratPizza from "../assets/images/maghratPizza.jpg";
import indianFood from "../assets/images/indianFood.jpg";

const OurSpecial = () => {
  const specials = [
    { image: paneerTikka, title: "Spicy Paneer Tikka" },
    {
      image: indianFood,
      title: "Signature Indian Food",
    },
    {
      image: maghratPizza,
      title: "Classic Margherita Pizza",
    },
  ];

  return (
    <div className="w-full  mx-auto p-8 text-center bg-gradient-to-r from-gray-50 to-gray-200">
      <h2 className="text-4xl font-bold text-orange-500 mb-4">
        Our Specialties
      </h2>
      <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6">
        We provide a wide range of cuisines and dishes to choose from, ensuring
        that every foodie in town has the best experience with us.
      </p>

      {/* Specials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {specials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-md transform transition duration-500 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecial;
