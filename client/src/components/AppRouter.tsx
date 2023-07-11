import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { useContext } from "react";
import { StoreProvider } from "../store";
import { useStore } from "../store";

export default function AppRouter() {
 const {userStore} = useStore()
 console.log(userStore)
  return (
    <Routes>
      {userStore.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component />} key={path} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  );
}
