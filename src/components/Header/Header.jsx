import { FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/Logo.png";
import "./Header.css";

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-and-cart">
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#" className="active">Menu</a>
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
}

export default Header;