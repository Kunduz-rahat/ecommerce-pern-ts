import { observer } from "mobx-react-lite";

import { useStore } from "../store";
export const SideBar = observer(() => {
  const { deviceStore } = useStore();
  console.log(deviceStore.types);
  return (
    <div className=" text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {deviceStore.types?.map((type) => (
        <button key={type.id}
          type="button"
          
          onClick={()=> deviceStore.setSelectedType(type)}
          className="relative inline-flex cursor-pointer items-center w-full px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-black hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-400 dark:hover:text-black dark:focus:ring-gray-500 dark:focus:text-white"
        >
          {type.name}
        </button>
      ))}
    </div>
  );
});
