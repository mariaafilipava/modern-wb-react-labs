import Header from './Header';
import Footer from './Footer';
import MenuItem from './MenuItem';
import menuItems from './menuItems';
import '../index.css';
import './MenuPage.css';

function MenuPage() {
  return (
    <>
      <Header />
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
    <button className="active">Desert</button>
    <button>Dinner</button>
    <button>Breakfast</button>
  </div>

  <div className="menu-grid">
    {menuItems.map((item) => (
      <MenuItem key={item.id} item={item} />
    ))}
  </div>
  <div className="see-more-container">
  <button className="see-more">See more</button>
</div>

</main>

      <Footer />
    </>
  );
}

export default MenuPage;