import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header";
import { observer } from "mobx-react-lite";
import { useStore } from "./store";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
import { check } from "./http/userApi";
export const App = observer(() => {
  const { userStore } = useStore();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    check()
      .then((data) => {
        userStore.setUser(true);
        userStore.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
})
