import React from "react";
import photo from "../assets/images/photo.jpg";

const testimonials = [
  {
    name: "Narendra Tomar",
    image: photo,
    rating: 5,
    review: "Amazing service! Highly recommended.",
    source: "Google",
  },
  {
    name: "Nitish Yadav",
    image: photo,
    rating: 4,
    review: "Great experience overall, will visit again!",
    source: "Facebook",
  },
  {
    name: "Rohit Rajput",
    image: photo,
    rating: 5,
    review: "Excellent quality and service!",
    source: "Instagram",
  },
];

const Testimonial = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg my-5">
      <h2 className="text-2xl font-bold text-center mb-4">
        Customer Testimonials
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.source}</p>
              </div>
            </div>
            <p className="mb-2">{testimonial.review}</p>
            <div className="text-yellow-500">
              {"⭐".repeat(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Leave a Review
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
