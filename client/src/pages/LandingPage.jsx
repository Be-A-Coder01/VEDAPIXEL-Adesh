import React from "react";
import Movies from "./Movies";
import Streams from "./Streams";
import Events from "./Events";
import Plays from "./Plays";
import Sports from "./Sports";
import Booking from "./Booking";
import { Routes, Route } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/streams" element={<Streams />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/plays" element={<Plays />}></Route>
          <Route path="/sports" element={<Sports />}></Route>
          {/* <Route path="/booking" element={<Booking />}></Route> */}
        </Routes>
      </div>
    </>
  );
};

export default LandingPage;
