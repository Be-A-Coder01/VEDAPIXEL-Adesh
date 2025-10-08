import React from "react";
import LandingPage from "./LandingPage";
import Categories from "./Categories";
import Banner from "./Banner";

const MainSection = () => {
  return (
    <>
      <div>
        <Categories></Categories>
        <Banner></Banner>
        <LandingPage></LandingPage>
      </div>
    </>
  );
};

export default MainSection;
