import React, { useState } from "react";
import bg from "../assets/authBG.png";
import { createUser } from "../features/user/userSlice";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let get = await dispatch(createUser(formData));
      console.log(get);

      if (get.payload.status) {
        // ✅ Store token in a cookie for 7 days
        Cookies.set("userToken", get.payload.token, {
          expires: 7,
          secure: true,
          sameSite: "strict",
        });
        toast.success(`${get.payload.message}`);
      } else {
        toast.error(`${get.payload.message}`);
      }
    } catch (error) {
      toast.error("Signup failed. Try again!");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img
        src={bg}
        alt="Events background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-10 p-8">
        {/* Left Side */}
        <div className="flex-1 text-center h-screen md:text-left place-content-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Booking.com
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Book tickets for movies, sports, plays, and activities easily. Join
            us and enjoy exclusive events near you!
          </p>
        </div>

        {/* Signup Form */}
        <div className="flex-1 w-full max-w-md bg-[#1F1B2E] p-8 rounded-2xl shadow-2xl border border-gray-700">
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-400">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <InputField
              name="name"
              label="Full Name"
              handleChange={handleChange}
            />
            <InputField
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <InputField
              name="number"
              label="Phone Number"
              handleChange={handleChange}
              type="tel"
            />
            <InputField name="city" label="City" handleChange={handleChange} />

            <div className="flex gap-4">
              <InputField
                name="password"
                label="Password"
                handleChange={handleChange}
                type="password"
              />
              <InputField
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 bg-purple-500 hover:bg-purple-600 transition duration-300 rounded-lg text-lg font-semibold shadow-md"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-4">
            Already have an account?
            <span className="text-purple-400 hover:underline cursor-pointer">
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

// ✅ Reusable Input Component
const InputField = ({ name, label, handleChange, type = "text" }) => (
  <div className="flex-1">
    <label className="block mb-1 text-sm text-gray-300">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={`Enter your ${label.toLowerCase()}`}
      onChange={handleChange}
      className="w-full p-3 rounded-lg text-white bg-[#2A2438] border border-gray-700 focus:outline-none focus:border-purple-400"
      required
    />
  </div>
);

export default Signup;
