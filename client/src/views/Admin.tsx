import React from 'react'

export const Admin = () => {
  return (
    <div className='md:w-1/4 h-60 mx-auto mt-10  w-1/2' >
      <button className="bg-blue-500 block mb-3 w-full   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Добавить тип</button>
      <button className="bg-blue-500 block mb-3 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Добавить бренд</button>
      <button className="bg-blue-500 block mb-3 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Добавить устройство</button>
    </div>
  )
}
