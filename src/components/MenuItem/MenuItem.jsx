import React, { Component } from "react";
import "./MenuItem.css";

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    this.setState({
      quantity: isNaN(value) || value < 1 ? 1 : value,
    });
  };

  handleAddToCart = () => {
    const { onAddToCart } = this.props;
    const { quantity } = this.state;
    if (onAddToCart && quantity > 0) {
      onAddToCart(quantity);
    }
  };

  render() {
    const { item } = this.props;
    const { quantity } = this.state;

    return (
      <div className="menu-card">
        <img src={item.image} alt={item.name} className="menu-image" />
        <div className="menu-content">
          <div className="menu-header">
            <h3 className="menu-title">{item.name}</h3>
            <span className="menu-price">{item.price}</span>
          </div>
          <p className="menu-description">{item.description}</p>
          <div className="menu-actions">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={this.handleQuantityChange}
              className="quantity-input"
            />
            <button className="add-to-cart" onClick={this.handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;


