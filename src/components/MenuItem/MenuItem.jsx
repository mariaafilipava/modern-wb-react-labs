import { useState } from "react";
import "./MenuItem.css";

function MenuItem({ item, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) || value < 1 ? 1 : value);
  };

  const handleAddToCart = () => {
    if (onAddToCart && quantity > 0) {
      onAddToCart(quantity);
    }
  };

  return (
    <div className="menu-card">
      <img
        src={item.image || "https://via.placeholder.com/120"} 
        alt={item.name || "Meal image"}
        className="menu-image"
      />
      <div className="menu-content">
        <div className="menu-header">
          <h3 className="menu-title">{item.name || "No name"}</h3>
          <span className="menu-price">
            ${item.price ? item.price.toFixed(2) : "N/A"} 
          </span>
        </div>
        <p className="menu-description">
          {item.description && item.description.length > 90
            ? item.description.slice(0, 90) + "..."
            : item.description || "No description available."}
        </p>
        <div className="menu-actions">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
