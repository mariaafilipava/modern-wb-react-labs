import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App(): React.ReactElement {
  const [activePage, setActivePage] = useState<"login" | "home" | "menu">("login");

  return (
    <>
      <Header cartCount={0} />
      {activePage === "home" && (
        <HomePage onNavigate={() => setActivePage("menu")} />
      )}
      {activePage === "menu" && <MenuPage />}
      {activePage === "login" && <LoginPage />}
      <Footer />
    </>
  );
}

export default App;





