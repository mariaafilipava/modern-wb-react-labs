function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Левая часть: логотип и описание */}
        <div className="footer-logo">
          <p>[ Logo ]</p>
          <p>
            Takeaway & Delivery template <br />
            for small - medium businesses.
          </p>
        </div>

        {/* Центральные ссылки */}
        <div className="footer-links">
          <div className="column">
            <h4>Company</h4>
            <ul>
              <li>Home</li>
              <li>Order</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="column">
            <h4>Template</h4>
            <ul>
              <li>Style Guide</li>
              <li>Changelog</li>
              <li>Licence</li>
              <li>Webflow University</li>
            </ul>
          </div>

          <div className="column">
            <h4>Flowbase</h4>
            <ul>
              <li>More Cloneables</li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="footer-bottom">
          <p>Built by Flowbase · Powered by Webflow</p>
          <p>[ Social Icons ]</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;