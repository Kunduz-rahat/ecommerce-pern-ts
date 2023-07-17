import React, { Children, useState } from 'react'
import { CreateBrand } from '../components/modals/CreateBrand';
import { CreateType } from '../components/modals/CreateType';
export const Admin = () => {
  const [brandVisible, setBrandVisible] = useState<boolean>(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const toggleModal = ()=>{

  }
  return (
    <div className='md:w-1/4 h-60 mx-auto mt-10  w-1/2' >
      <button onClick={() => setTypeVisible(true)} className="bg-blue-500 block mb-3 w-full   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Добавить тип</button>
      <button onClick={() => setBrandVisible(true)} className="bg-blue-500 block mb-3 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Добавить бренд</button>
      <button onClick={() => setDeviceVisible(true)} className="bg-blue-500 block mb-3 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Добавить устройство</button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} children={Children} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} children={Children} />
    </div>
  )
}
