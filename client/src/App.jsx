import React, { useEffect, useState } from "react";
import Menu from "./pages/Menu";
import MainSection from "./pages/MainSection";
import Signin from "./pages/Signin";
import Movies from "./pages/Movies";
import Streams from "./pages/Streams";
import Events from "./pages/Events";
import Plays from "./pages/Plays";
import Sports from "./pages/Sports";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import { useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const [role, setRole] = useState();
  const auth = useSelector((state) => state.accessRole.role);
  useEffect(() => {
    setRole(auth);
  }, [auth]);

  return (
    <>
      {role ? (
        <Admin />
      ) : (
        <>
          <Menu />
          <Routes>
            <Route path="/" element={<MainSection />}>
              <Route index element={<Movies />} />
              <Route path="streams" element={<Streams />} />
              <Route path="events" element={<Events />} />
              <Route path="plays" element={<Plays />} />
              <Route path="sports" element={<Sports />} />
            </Route>
            <Route path="booking" element={<Booking />} />
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/Signin" element={<Signin />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Admin" element={<Admin />}></Route>
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
