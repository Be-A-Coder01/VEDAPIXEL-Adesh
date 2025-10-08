import React from "react";
import "../App.css";
import ban1 from "../assets/banner1.jpeg";

const Banner = () => {
  return (
    <div className="flex gap-4 overflow-x-auto py-6 w-screen bg-[#18161F] scrollbar-hide">
      <img
        src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1757747680449_13thseprambocircusdesktop.jpg"
        alt=""
        className="w-[80vw] h-[42vh] rounded-2xl object-fit flex-shrink-0"
      />

      <img
        src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1759487085225_1240x300bmsluckyali.jpeg"
        alt=""
        className="w-[80vw] h-[42vh] rounded-2xl object-fit flex-shrink-0"
      />
      <img
        src={ban1}
        alt=""
        className="w-[80vw] h-[42vh] rounded-2xl object-fit flex-shrink-0"
      />
      <img
        src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1757424412216_web.jpg"
        alt=""
        className="w-[80vw] h-[42vh] rounded-2xl object-fit flex-shrink-0"
      />
      <img
        src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1757747680449_13thseprambocircusdesktop.jpg"
        alt=""
        className="w-[80vw] h-[42vh] rounded-2xl object-fit flex-shrink-0"
      />
    </div>
  );
};

export default Banner;
