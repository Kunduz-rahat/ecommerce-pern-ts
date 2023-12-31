import React from "react";
import { NavLink } from "react-router-dom";
import { useStore } from "../store";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils";
import { observer } from "mobx-react-lite";
export const Header = observer(() => {
  const { userStore } = useStore();
  const logOut = () => {
    userStore.setUser({});
    userStore.setIsAuth(false);
  };
  return (
    <div className="mx-auto max-w-screen-xl ">
      <nav className=" mx-auto   text-white  w-full    p-4 md:flex justify-between items-center ">
        <div>
          <a href="/" className="flex items-center">
            <span className="self-center text-3xl  text-transparent  whitespace-nowrap duration-500 dark:text-white hover:text-my-red ">
              E-store
            </span>
          </a>
        </div>
        {userStore.isAuth ? (
          <ul className="text-semibold md:flex md:items-center flex  md:static text-white   md:opacity-100   sm:text-black md:w-auto w-full left-0">
            <li className="mx-4">
              <NavLink
                to={ADMIN_ROUTE}
                className="  hover:text-my-red md:p-0 dark:text-white text-xl duration-500  font-semibold mt-2"
              >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Админ панель
                </button>
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink
                to={"/"}
                className="  hover:text-my-red md:p-0 dark:text-white text-xl duration-500  font-semibold mt-2"
              >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => logOut()}>
                  Выйти
                </button>
              </NavLink>
            </li>
          </ul>
        ) : (
          <NavLink
            to={LOGIN_ROUTE}
            className="  hover:text-my-red md:p-0 dark:text-white text-xl duration-500  font-semibold mt-2"
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> userStore.setIsAuth(true)}>
              Авторизация
            </button>
          </NavLink>
        )}
      </nav>
    </div>
  );
})
