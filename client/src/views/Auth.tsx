import  { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils";
import { login, registration } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";

export const Auth = observer(() => {
  const { userStore } = useStore();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      userStore.setUser(userStore);
      userStore.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (error:any) {
      alert(error.response.data.message);
    }
  };

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
          Email:
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={e=> setEmail(e.target.value)}
            className="mt-1 text-black w-full rounded-lg border py-1 px-2 text-xs bg-gradient-to-r from-[#5271FF] to-[#05CCCB] outline-none placeholder:text-gray-700"
          />
        </label>

        <label className="text-xs text-black">
          Password:
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e=> setPassword(e.target.value)}
            className="mt-1 text-black w-full rounded-lg bg-gradient-to-r from-[#5271FF] to-[#05CCCB] border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
          />
        </label>

        <div className=" mt-4 p-2 flex justify-between">
          {isLogin ? (
            <div className="flex justify-between items-center">
              <div>
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            </div>
          )}
          <button
            type="submit"
            onClick={click}
            className="flex items-center  text-xs bg-gradient-to-r from-[#5271FF] to-[#05CCCB] text-white rounded-sm py-2 px-4"
          >
            {isLogin ? "Войти" : "Регистрация"}
          </button>
        </div>
      </form>
    </div>
  );
})
