import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./router/AppRouter";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const App: React.FC = () => {
  const cartCount = useSelector((state: RootState) => state.menu.cartCount);

  return (
    <>
      <Header cartCount={cartCount} />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;