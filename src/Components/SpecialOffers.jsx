// import React from "react";
// import combo from "../assets/images/combo.jpg";
// import happyHour from "../assets/images/happyHour.jpg";
// import paneer from "../assets/images/paneer.jpg";

// const offers = [
//   {
//     title: "Flat 20% OFF on First Order!",
//     description: "Use code: FIRST20",
//     image: paneer,
//   },
//   {
//     title: "Happy Hours 3 PM - 6 PM",
//     description: "Get special discounts on all orders",
//     image: happyHour,
//   },
//   {
//     title: "Combo Meals at 30% OFF",
//     description: "Limited-time deal on best-selling combos",
//     image: combo,
//   },
// ];

// const SpecialOffers = () => {
//   return (
//     <div className="w-[90%] mx-auto bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 my-5 rounded-xl shadow-lg">
//       <h2 className="text-3xl font-bold text-center mb-6">
//         🔥 Special Offers & Discounts 🔥
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {offers.map((offer, index) => (
//           <div
//             key={index}
//             className="bg-white text-gray-900 p-5 rounded-lg shadow-md flex flex-col items-center "
//           >
//             <h3 className="text-xl font-semibold">{offer.title}</h3>
//             <div className="w-72 h-40">
//               <img src={offer.image} alt="images" className="w-full h-full bg-cover rounded-lg" />
//             </div>{" "}
//             <p className="text-sm mt-2">{offer.description}</p>
//             <button className="mt-4 bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-lg transition-all">
//               Claim Offer
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpecialOffers;

import React from "react";
import combo from "../assets/images/combo.jpg";
import happyHour from "../assets/images/happyHour.jpg";
import paneer from "../assets/images/paneer.jpg";

const offers = [
  {
    title: "Flat 20% OFF on First Order!",
    description: "Use code: FIRST20",
    image: paneer,
  },
  {
    title: "Happy Hours 3 PM - 6 PM",
    description: "Get special discounts on all orders",
    image: happyHour,
  },
  {
    title: "Combo Meals at 30% OFF",
    description: "Limited-time deal on best-selling combos",
    image: combo,
  },
];

const SpecialOffers = () => {
  return (
    <div className="w-[90%] mx-auto bg-gradient-to-r from-orange-500 to-red-500 text-white p-10 my-5 rounded-2xl shadow-2xl">
      <h2 className="text-4xl font-extrabold text-center mb-8 tracking-wide">
        🔥 Special Offers & Discounts 🔥
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-800">{offer.title}</h3>
            <div className="w-72 h-44 my-4 overflow-hidden rounded-xl shadow-md">
              <img
                src={offer.image}
                alt="Special Offer"
                className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="text-gray-600 text-sm mb-4 text-center">
              {offer.description}
            </p>
            <button className="mt-auto bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold tracking-wide transition-all duration-300">
              Claim Offer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
