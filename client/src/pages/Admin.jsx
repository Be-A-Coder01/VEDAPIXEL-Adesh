import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEvents } from "../features/admin/adminPostSlice";

const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    movieLevel: "",
    productImage: "", // <-- now a string (URL)
    category: "",
    description: "",
    location: "",
    nature: "",
    language: "",
  });

  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.price || !formData.productImage) {
      setError("Please fill all required fields (Title, Price, Image URL)");
      return;
    }

    let getMessage = await dispatch(createEvents(formData));
    console.log(getMessage);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg border border-gray-200"
      >
        <h1 className="text-2xl font-semibold text-center mb-6 text-blue-600">
          Admin – Add Event / Product
        </h1>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Enter title"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Price *</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Enter price"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Movie Level *</label>
          <input
            type="text"
            name="movieLevel"
            value={formData.movieLevel}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Enter movie Level"
          />
        </div>

        {/* Product Image URL */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Product Image URL *
          </label>
          <input
            type="text"
            name="productImage"
            value={formData.productImage}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Enter image URL"
          />
        </div>

        {/* Optional Fields */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="e.g., Movie, Sports, Play"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Enter short description..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Enter location"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Nature</label>
          <input
            type="text"
            name="nature"
            value={formData.nature}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="e.g., Adventure, Romantic, Comedy"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Language</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="e.g., English, Hindi"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default Admin;
