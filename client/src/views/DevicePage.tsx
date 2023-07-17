import React from 'react'
import  star from '../assets/star.png'
export const DevicePage = () => {
  const device = {
    id: 1,
    name: "Iphone pro12",
    rating: 4,
    price:10000,
    img: "https://asiastore.kg/image/cachewebp/catalog/iphone/iphone14/iphone14pro/deeppurple/wwen_iphone14pro_q422_deep-purple_pdp-images_position-1a-670x540.webp",
  }
  const des =[
    {id:1, title:"оперативная память", desk:"5 гб"},
    {id:2, title:"Камера", desk:"12 мп"},
    {id:3, title:"Процессор", desk:"Актимум"},
    {id:4, title:"Аккумулятор", desk:"4999"},
  ]
  return (
    <div className="flex flex-row gap-3">
    <div className="basis-1/3 ">
     <img src={device.img}/>
    </div>
    <div className="basis-1/3 ">
      <h2> {device.name}</h2>
   <p> {device.rating}</p>
   <img src={star} alt="" />
    </div>
    <div className="basis-1/3 ">
   <p>{device.price.toLocaleString()} руб.</p>
   <h3 className='font-bold'>Характеристика</h3>
   {des.map(d=>
        <div key={d.id}>
          <p>{d.title} : {d.desk}</p>
        </div>)}
    </div>
   
  </div>
  )
}
