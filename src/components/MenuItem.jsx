function MenuItem({ item }) {
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
          <input type="number" defaultValue="1" min="1" className="quantity-input" />
          <button className="add-to-cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;