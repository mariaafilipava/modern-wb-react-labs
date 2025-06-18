import { useSelector } from "react-redux";
import { RootState } from "./store/store";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App(): React.ReactElement {
  const activePage = useSelector((state: RootState) => state.page.activePage);
  const cartCount = useSelector((state: RootState) => state.menu.cartCount);

  return (
    <>
      <Header cartCount={cartCount} />

      {activePage === "home" && <HomePage />}
      {activePage === "menu" && <MenuPage />}
      {activePage === "login" && <LoginPage />}

      <Footer />
    </>
  );
}

export default App;
