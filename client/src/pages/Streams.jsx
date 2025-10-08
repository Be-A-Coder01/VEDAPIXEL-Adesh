import React, { useEffect } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getevents } from "../features/events/getEventSlice";
import { Link } from "react-router-dom";

const Streams = () => {
  const dispatch = useDispatch();
  const { eventData, loading, error } = useSelector(
    (state) => state.eventStore
  );

  useEffect(() => {
    dispatch(getevents("streams"));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-white text-center py-10">Loading streams...</div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">Error: {error}</div>;
  }

  const recommended = eventData.slice(0, 6);
  const topRated = eventData.slice(6, 12);
  const popular = eventData.slice(12, 22);

  const renderStreamSection = (title, streams) => (
    <div>
      <p className="text-2xl font-semibold mb-4 pl-5">{title}</p>
      <div className="flex gap-10 mx-15 overflow-x-auto scrollbar-hide">
        {streams.map((stream) => (
          <Link
            to="/booking"
            state={{ event: stream }}
            key={stream._id}
            className="w-56 flex-shrink-0 p-2 rounded-xl bg-[#282635] hover:scale-105 transition-transform"
          >
            <img
              src={stream.productImage}
              alt={stream.title}
              className="h-[380px] w-full rounded-xl object-cover"
            />
            <div className="mt-2">
              <p className="text-sm font-semibold">{stream.title}</p>
              {stream.nature && (
                <p className="text-gray-400 text-xs">{stream.nature}</p>
              )}
              <p className="text-gray-200 text-sm font-medium mt-1">
                ₹{stream.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#18161F] text-white flex flex-col gap-10 px-6 py-6 w-screen">
      {renderStreamSection("Recommended Streams", recommended)}
      {renderStreamSection("Top Rated Streams", topRated)}
      {renderStreamSection("Popular Streams", popular)}
    </div>
  );
};

export default Streams;
