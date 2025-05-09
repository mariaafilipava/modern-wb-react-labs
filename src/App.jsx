import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from './components/MenuPage/MenuPage';

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      {activePage === "home" && <HomePage onNavigate={() => setActivePage("menu")} />}
      {activePage === "menu" && <MenuPage />}
    </>
  );
}

export default App;
