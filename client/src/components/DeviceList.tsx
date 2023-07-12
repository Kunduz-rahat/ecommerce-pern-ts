import React from 'react'
import { useStore } from "../store";

export const DeviceList = () => {
    const { deviceStore } = useStore();
    console.log(deviceStore)
  return (
    <div>
         {/* {deviceStore.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))} */}
      </div>
  )
}
