function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/logo-placeholder.svg" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;