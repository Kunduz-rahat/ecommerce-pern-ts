import React from "react";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils";

interface IDevice {
  id: number;
  rating: number;
  img: string;
  name: string;
}
interface DeviceProps {
  device: IDevice;
}
export const DeviceItem = ({ device }: DeviceProps) => {
    const navigate = useNavigate();
  return (
    <div className="mr-3" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
        <div>
            <img src={device.img} alt={device.name}/>
        </div>
        <p>
            {device.name}
        </p>
        <p>{device.rating}</p>
    </div>
    
  );
};
