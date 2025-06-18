import { useNavigate, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "./Header.css";
import logo from "../../assets/Logo.png";

type HeaderProps = {
  cartCount: number;
};

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const rawUsername = localStorage.getItem("username");
  const showUsername = isLoggedIn && rawUsername;

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-and-cart">
        <nav className="nav">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/menu");
            }}
            className={location.pathname === "/menu" ? "active" : ""}
          >
            Menu
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
            }}
            className={location.pathname === "/company" ? "active" : ""}
          >
            Company
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
            className={location.pathname === "/login" ? "active" : ""}
          >
            {showUsername ? rawUsername : "Login"}
          </a>
        </nav>

        <div
          className="cart"
          onClick={() => {
            if (isLoggedIn) {
              navigate("/order");
            } else {
              navigate("/login?redirect=order");
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <FiShoppingCart />
          <span className="cart-badge">{cartCount}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;