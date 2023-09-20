import React from "react";
import CardNews from "../UI/CardNews";

const HomeNews = () => {
  return (
    <div>
      <nav className="w-full h-14 flex bg-black text-white items-center justify-between px-[4%]">
        <div className="">
          <h1 className="text-lg font-medium">News Update</h1>
        </div>
        <div className="flex gap-5">
          <select className="bg-white">z</select>
          <input type="text" className="bg-white" />
        </div>
      </nav>
      <div className="p-[4%]">
        <div className="grid grid-cols-4 gap-2">
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
