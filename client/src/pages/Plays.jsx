import React, { useEffect } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getevents } from "../features/events/getEventSlice";
import { Link } from "react-router-dom";

const Plays = () => {
  const dispatch = useDispatch();
  const { eventData, loading, error } = useSelector(
    (state) => state.eventStore
  );

  useEffect(() => {
    dispatch(getevents("play"));
  }, [dispatch]);

  if (loading) {
    return <div className="text-white text-center py-10">Loading plays...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">Error: {error}</div>;
  }

  const featured = eventData.slice(0, 6);
  const popular = eventData.slice(6, 12);

  const renderPlaySection = (title, plays) => (
    <div>
      <p className="text-2xl font-semibold mb-4 pl-5">{title}</p>
      <div className="flex gap-10 mx-15 overflow-x-auto scrollbar-hide">
        {plays.map((play) => (
          <Link
            to="/booking"
            state={{ event: play }}
            key={play._id}
            className="w-56 flex-shrink-0 p-2 rounded-xl bg-[#282635] hover:scale-105 transition-transform"
          >
            <img
              src={play.productImage}
              alt={play.title}
              className="h-[380px] w-full rounded-xl object-cover"
            />
            <div className="mt-2">
              <p className="text-sm font-semibold">{play.title}</p>
              {play.location && (
                <p className="text-gray-400 text-xs">{play.location}</p>
              )}
              <p className="text-gray-200 text-sm font-medium mt-1">
                ₹{play.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#18161F] text-white flex flex-col gap-10 px-6 py-6 w-screen">
      {renderPlaySection("Featured Plays", featured)}
      {renderPlaySection("Popular Plays", popular)}
    </div>
  );
};

export default Plays;
