import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className=" flex justify-center gap-10 bg-[#323038] py-[5px] w-screen text-white">
        <Link to="/">Movies</Link>
        <Link to="/streams">Streams</Link>
        <Link to="/events">Events</Link>
        <Link to="/plays">Plays</Link>
        <Link to="/sports">Sports</Link>
      </div>
    </>
  );
};

export default Categories;
