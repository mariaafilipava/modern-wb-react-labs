import { FiShoppingCart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./Header.css";

type HeaderProps = {
  cartCount: number;
};

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-and-cart">
        <nav className="nav">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={location.pathname === "/menu" ? "active" : ""}
          >
            Menu
          </Link>
          <a href="#">Company</a>
          <a href="#">Login</a>
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