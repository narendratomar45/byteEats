import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const newData = new FormData();
      Object.keys(formData).forEach((key) => {
        newData.append(key, formData[key]);
      });
      console.log([...newData.entries()]);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(formData).map((entry, index) => (
            <div key={index} className="flex flex-col">
              <label htmlFor={entry} className="text-gray-700 font-medium mb-1">
                {entry.charAt(0).toUpperCase() + entry.slice(1)}
              </label>
              <input
                type={
                  entry.includes("password")
                    ? "password"
                    : entry === "confirmPassword"
                    ? "password"
                    : entry === "email"
                    ? "email"
                    : "text"
                }
                name={entry}
                value={formData[entry]}
                placeholder={`Enter your ${entry}`}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className=" flex justify-center items-center gap-5 text-center">
          <p>Already have an Account?</p>
          <Link to={"/login"}>
            <button className="mt-2 text-orange-500 font-bold hover:underline cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
