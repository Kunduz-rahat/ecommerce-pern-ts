import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from "../store";
export const BrandBar = observer(() => {
    const { deviceStore } = useStore();
  return (
    <div className="grid grid-cols-6 gap-4 text-gray-900    border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"> {deviceStore.brands?.map((brand) => (
        <button key={brand.id}
          type="button"
          
          onClick={()=> deviceStore.setSelectedBrand(brand)}
          className="mr-3 cursor-pointer  w-full px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-black hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-400 dark:hover:text-black dark:focus:ring-gray-500 dark:focus:text-white"
        >
          {brand.name}
        </button>
      ))}</div>
  )
})
