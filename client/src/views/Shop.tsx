import  { useEffect } from "react";
import { SideBar } from "../components/SideBar";
import { BrandBar } from "../components/BrandBar";
import { DeviceList } from "../components/DeviceList";
import { useStore } from "../store";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceApi";
import React from "react";
export const Shop = () => {
  const { deviceStore } = useStore();
  // useEffect(() => {
  //   fetchTypes().then((data:any) => deviceStore.setTypes(data));
  //   fetchBrands().then((data:any) => deviceStore.setBrands(data));
  //   fetchDevices(null, null, 1, 2).then((data: any) => {
  //     deviceStore.setDevices(data.rows);
  //     deviceStore.setTotalCount(data.count);
  //   });
  // }, []);

  // useEffect(() => {
  //   fetchDevices(
  //     deviceStore.selectedType,
  //     deviceStore.selectedBrand,
  //     deviceStore.page,
  //     10
  //   ).then((data:any) => {
  //     deviceStore.setDevices(data.rows);
  //     deviceStore.setTotalCount(data.count);
  //   });
  // }, [deviceStore.page, deviceStore.selectedType, deviceStore.selectedBrand]);

  return (
    <div className="flex flex-row gap-3">
      <div className="basis-1/4 ">
        <SideBar />
      </div>
      <div className="basis-3/4 ">
        <BrandBar />
        <DeviceList/>
      </div>
    </div>
  );
};
