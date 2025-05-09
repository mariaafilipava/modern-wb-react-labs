import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MenuItem from "../MenuItem/MenuItem";
import "../../index.css";
import "./MenuPage.css";

function MenuPage() {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then((res) => res.json())
      .then((data) => {
        const formattedMeals = data.map((meal) => ({
          id: meal.id,
          name: meal.meal,
          image: meal.img,
          description: meal.instructions,
          category: meal.category,
          price: meal.price,
        }));
        setItems(formattedMeals);
      })
      .catch((err) => console.error("Failed to fetch meals:", err));

    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Failed to fetch orders:", err));
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleAddToCart = (amount = 1) => {
    setCartCount((prev) => prev + amount);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

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
          <button
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => handleFilter("All")}
          >
            All
          </button>
          <button
            className={selectedCategory === "Dessert" ? "active" : ""}
            onClick={() => handleFilter("Dessert")}
          >
            Dessert
          </button>
          <button
            className={selectedCategory === "Dinner" ? "active" : ""}
            onClick={() => handleFilter("Dinner")}
          >
            Dinner
          </button>
          <button
            className={selectedCategory === "Breakfast" ? "active" : ""}
            onClick={() => handleFilter("Breakfast")}
          >
            Breakfast
          </button>
        </div>

        <div className="menu-grid">
          {filteredItems.slice(0, visibleCount).map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {visibleCount < filteredItems.length && (
          <div className="see-more-container">
            <button className="see-more" onClick={handleSeeMore}>
              See more
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default MenuPage;



