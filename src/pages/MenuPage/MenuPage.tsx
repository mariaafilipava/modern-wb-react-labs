import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  setItems,
  setOrders,
  incrementVisibleCount,
  setSelectedCategory,
  addToCart,
} from "../../store/menuSlice";

import MenuItem from "../../components/MenuItem/MenuItem";
import "../../index.css";
import "./MenuPage.css";

function MenuPage(): React.ReactElement {
  const dispatch = useDispatch();
  const { items, visibleCount, selectedCategory, cartCount } = useSelector(
    (state: RootState) => state.menu
  );

  useEffect(() => {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then((res) => res.json())
      .then((data) => {
        const formattedMeals = data.map((meal: any) => ({
          id: meal.id,
          name: meal.meal,
          image: meal.img,
          description: meal.instructions,
          category: meal.category,
          price: meal.price,
        }));
        dispatch(setItems(formattedMeals));
      });

    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders")
      .then((res) => res.json())
      .then((data) => dispatch(setOrders(data)));
  }, [dispatch]);

  const handleSeeMore = () => {
    dispatch(incrementVisibleCount());
  };

  const handleAddToCart = (amount: number = 1) => {
    dispatch(addToCart(amount));
  };

  const handleFilter = (category: string) => {
    dispatch(setSelectedCategory(category));
  };

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
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
          <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
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
  );
}

export default MenuPage;