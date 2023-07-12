import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils";

export const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="md:w-1/4 h-60 mx-auto mt-10  w-1/2 "
      >
        <h1 className="text-lg text-black text-center font-medium">
          {isLogin ? "Авторизация" : "Регистрация"}
        </h1>
        <label className="text-xs text-black ">
          Username:
          <input
            type="text"
            placeholder="Username"
            className="mt-1 text-black w-full rounded-lg border py-1 px-2 text-xs bg-gradient-to-r from-[#5271FF] to-[#05CCCB] outline-none placeholder:text-gray-700"
          />
        </label>

        <label className="text-xs text-black">
          Password:
          <input
            type="password"
            placeholder="Password"
            className="mt-1 text-black w-full rounded-lg bg-gradient-to-r from-[#5271FF] to-[#05CCCB] border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
          />
        </label>

        <div className=" mt-4 p-2">
          {isLogin ? (
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="flex justify-center items-center text-xs bg-gradient-to-r from-[#5271FF] to-[#05CCCB] text-white rounded-sm py-2 px-4"
              >
                Нет аккаунта?
              </button>
              <div>
              <Link
                to={REGISTRATION_ROUTE}
                className="flex justify-center items-center text-xs text-black"
              >
                Зарегистрируйся !
              </Link>
              </div>
             
            </div>
          ) : (
            <div className="flex justify-between items-center">
              
              <button
                type="submit"
                className="flex justify-center items-center text-xs bg-gradient-to-r from-[#5271FF] to-[#05CCCB] text-white rounded-sm py-2 px-4"
              >
                Есть аккаунт ?
              </button>
              <div>
              <NavLink
                to={LOGIN_ROUTE}
                className="flex justify-center items-center text-xs text-black"
              >
                Войдите
              </NavLink>
              </div>
             
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
