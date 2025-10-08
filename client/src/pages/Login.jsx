import React, { useState } from "react";
import bg from "../assets/authBG.png";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { getRole } from "../features/admin/adminSlice";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let get = await dispatch(loginUser(formData));

    if (get.payload && get.payload.token) {
      Cookies.set("userToken", get.payload.token, {
        expires: 7,
        secure: false,
        sameSite: "strict",
      });
      const decoded = jwtDecode(get.payload.token);

      toast.success(`${get.payload.status}`);

      if (decoded.role === "admin") {
        dispatch(getRole(true));
        // navigate("/admin");
        alert("admin");
      } else {
        navigate("/");
      }

      toast.success(`${get.payload.status}`);
    } else {
      toast.error("Please enter correct details");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img
        src={bg}
        alt="Events background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 bg-black/40 "></div>
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-10 p-8">
        <div className="flex-1 text-center md:text-left h-screen place-content-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome Back to EventHub
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Log in to book tickets for movies, sports, plays, and activities.
            Join now and never miss out on exciting events near you!
          </p>
        </div>

        <div className="flex-1 w-full my-auto place-content-center max-w-md bg-[#1F1B2E] p-8 rounded-2xl shadow-2xl border border-gray-700">
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-400">
            Login to Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="w-full text-white p-3 rounded-lg bg-[#2A2438] border border-gray-700 focus:outline-none focus:border-purple-400"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                className="w-full p-3 text-white rounded-lg bg-[#2A2438] border border-gray-700 focus:outline-none focus:border-purple-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 bg-purple-500 hover:bg-purple-600 transition duration-300 rounded-lg text-lg font-semibold shadow-md"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-4">
            Don't have an account?
            <span className="text-purple-400 hover:underline cursor-pointer">
              Sign up
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
      />
    </div>
  );
};

export default Login;
