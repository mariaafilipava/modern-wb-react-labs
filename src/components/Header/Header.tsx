import { FiShoppingCart } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setActivePage } from "../../store/pageSlice";
import logo from "../../assets/Logo.png";
import "./Header.css";

type HeaderProps = {
  cartCount: number;
};

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const dispatch = useDispatch();
  const activePage = useSelector((state: RootState) => state.page.activePage);

  const handleClick = (page: "home" | "menu" | "login") => {
    dispatch(setActivePage(page));
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-and-cart">
        <nav className="nav">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("home");
            }}
            className={activePage === "home" ? "active" : ""}
          >
            Home
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("menu");
            }}
            className={activePage === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a href="#">Company</a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("login");
            }}
            className={activePage === "login" ? "active" : ""}
          >
            Login
          </a>
        </nav>

        <div className="cart">
          <FiShoppingCart />
          <span className="cart-badge">{cartCount}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
