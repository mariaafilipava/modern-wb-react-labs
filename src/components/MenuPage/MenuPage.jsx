import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MenuItem from "../MenuItem/MenuItem";
import "../../index.css";
import "./MenuPage.css";

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      visibleCount: 6,
      cartCount: 0,
    };
  }

  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        const meals = data.meals.map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          price: `$${(Math.random() * 10 + 5).toFixed(2)} USD`,
          description: meal.strInstructions
            ? meal.strInstructions.slice(0, 100) + "..."
            : "No description available.",
          image: meal.strMealThumb,
        }));
        this.setState({ items: meals });
      })
      .catch((err) => console.error("Failed to fetch meals:", err));
  }

  handleSeeMore = () => {
    this.setState((prevState) => ({
      visibleCount: prevState.visibleCount + 6,
    }));
  };

  handleAddToCart = (amount = 1) => {
    this.setState((prevState) => ({
      cartCount: prevState.cartCount + amount,
    }));
  };

  render() {
    const { items, visibleCount, cartCount } = this.state;

    return (
      <>
        <Header cartCount={cartCount} />
        <main className="menu-page">
          <div className="menu-header">
            <div className="menu-header-inner">
              <h1>Browse our menu</h1>
              <p>
                Use our menu to place an order online, or{" "}
                <span className="tooltip-trigger">
                  phone
                  <span className="tooltip">+1 (234) 567-890</span>
                </span>{" "}
                our store to place a pickup order. Fast and fresh food.
              </p>
            </div>
          </div>

          <div className="filter-buttons">
            <button className="active">Dessert</button>
            <button>Dinner</button>
            <button>Breakfast</button>
          </div>

          <div className="menu-grid">
            {items.slice(0, visibleCount).map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                onAddToCart={this.handleAddToCart}
              />
            ))}
          </div>

          {visibleCount < items.length && (
            <div className="see-more-container">
              <button className="see-more" onClick={this.handleSeeMore}>
                See more
              </button>
            </div>
          )}
        </main>
        <Footer />
      </>
    );
  }
}

export default MenuPage;
