import React, { useEffect } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getevents } from "../features/events/getEventSlice";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { eventData, loading, error } = useSelector(
    (state) => state.eventStore
  );

  useEffect(() => {
    dispatch(getevents("movies"));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-white text-center py-10">Loading movies...</div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">Error: {error}</div>;
  }

  const recommended = eventData.slice(0, 7);
  const topRated = eventData.slice(7, 13);
  const popular = eventData.slice(13, 20);

  const handleCardClick = (movie) => {
    navigate("/booking", { state: { event: movie } });
  };

  const renderMovieSection = (title, movies) => (
    <div>
      <p className="text-2xl font-semibold mb-4 pl-5">{title}</p>
      <div className="flex gap-10 mx-15 overflow-x-auto scrollbar-hide">
        {movies.map((movie) => (
          <div
            key={movie._id}
            onClick={() => handleCardClick(movie)}
            className="w-60 flex-shrink-0 p-2 rounded-xl bg-[#282635] cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={movie.productImage}
              alt={movie.title}
              className="h-[380px] w-full rounded-xl object-cover"
            />
            <div className="mt-2">
              <p className="text-sm font-semibold">{movie.title}</p>

              <p className="text-gray-200 text-sm font-medium mt-1">
                ₹{movie.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#18161F] text-white flex flex-col gap-10 px-6 py-6 w-screen">
      {renderMovieSection("Recommended Movies", recommended)}
      {renderMovieSection("Top Rated Movies", topRated)}
      {renderMovieSection("Popular Movies", popular)}
    </div>
  );
};

export default Movies;
