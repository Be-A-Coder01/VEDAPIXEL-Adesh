import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addevent } from "../features/bookEvent/eventBookingSlice";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
// import jwt_decode from "jwt-decode";

const Booking = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const event = location.state?.event;
  const navigate = useNavigate();

  const [count, setCount] = useState(1);

  if (!event) {
    return (
      <div className="text-white text-center py-10">No event selected.</div>
    );
  }

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  const totalPrice = event.price * count;

  const handleBooking = () => {
    const token = Cookies.get("userToken");
    if (!token) {
      navigate("/login");
      return;
    }

    const decoded = jwt_decode(token);
    const userEmail = decoded.email;

    const eventData = {
      eventId: event._id,
      eventName: event.title,
      quantity: count,
      totalPrice,
      userEmail,
    };

    dispatch(addevent({ eventData }))
      .unwrap()
      .then(() => toast.success("Event added to cart successfully"))
      .catch((err) => toast.error(err));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-[#18161F] text-white p-6 min-h-screen">
      <div className="flex-shrink-0 md:w-1/2">
        <img
          src={event.productImage}
          alt={event.title}
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{event.title}</h2>
        {event.location && (
          <p className="text-gray-400 text-lg">Location: {event.location}</p>
        )}
        {event.description && (
          <p className="text-gray-300">{event.description}</p>
        )}
        <p className="text-lg font-semibold">Price: ₹{event.price}</p>

        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={decrement}
            className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
          >
            -
          </button>
          <span className="text-xl font-semibold">{count}</span>
          <button
            onClick={increment}
            className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
          >
            +
          </button>
        </div>

        <p className="mt-4 text-2xl font-bold">Total: ₹{totalPrice}</p>

        <button
          onClick={handleBooking}
          className="mt-6 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Booking;
