import React from "react";
import { useStore } from "../store";
import { observer } from "mobx-react-lite";
import { DeviceItem } from "./DeviceItem";

type DeviceProps = {
  name: string;
  id:number, 
  rating:number, 
  img:string
};
export const DeviceList= observer(() => {
  const { deviceStore } = useStore();
  console.log(deviceStore.devices);
  return (
    <div>
      {deviceStore.devices?.map((device, idx) => (
        <DeviceItem key={idx} device={device} />
      ))}
    </div>
  );
});
