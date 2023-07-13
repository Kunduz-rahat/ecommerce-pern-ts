import React from 'react'

interface IDevice{
    id:number, rating:number, img:string, name:string
}
interface DeviceProps{
    device:IDevice
}
export const DeviceItem = ({device}:DeviceProps) => {
  return (
    <div>{device.name}
    <img src={device.img} alt="" />
    </div>
  )
}
