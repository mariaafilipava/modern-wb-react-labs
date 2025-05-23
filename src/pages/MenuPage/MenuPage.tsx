import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MenuItem from "../../components/MenuItem/MenuItem";
import "../../index.css";
import "./MenuPage.css";

type Meal = {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  price: number;
};

function MenuPage(): React.ReactElement {
  const [items, setItems] = useState<Meal[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then((res) => res.json())
      .then((data) => {
        const formattedMeals: Meal[] = data.map((meal: any) => ({
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

  const handleAddToCart = (amount: number = 1) => {
    setCartCount((prev) => prev + amount);
  };

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  const filteredItems = selectedCategory === "All"
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
          {["All", "Dessert", "Dinner", "Breakfast"].map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))}
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
