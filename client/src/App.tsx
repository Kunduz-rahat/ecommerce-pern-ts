import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

import { Header } from "./components/Header";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
};
