import React from "react";
import { SideBar } from "../components/SideBar";
import { BrandBar } from "../components/BrandBar";

export const Shop = () => {
  return (
    <div className="flex flex-row gap-3">
      <div className="basis-1/4 ">
        <SideBar/>
      </div>
      <div className="basis-3/4 bg-black">
        <BrandBar/>
      </div>
    </div>
  );
};
