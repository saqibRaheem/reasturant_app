export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-fire-bar" />
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">S<span>&</span>S</div>
            <div className="footer-logo-sub">CheeseSteaks</div>
            <p>Richardson&apos;s Finest Philly CheeseSteaks,<br />Burgers &amp; Sandwiches</p>
          </div>
          <div className="footer-nav">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#featured">Featured</a>
            <a href="#menu">Menu</a>
            <a href="#shareables">Shareables</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>📍 #300 N Coit Rd, Richardson TX</p>
            <a href="tel:+19453989915">📞 +1 (945) 398-9915</a>
            <a href="mailto:sscheesesteaks@gmail.com">✉️ sscheesesteaks@gmail.com</a>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <a href="#" className="fs-link">📷 @sscheesesteaks</a>
            <a href="#" className="fs-link">📘 S&amp;SCheeseSteaks</a>
            <a href="#" className="fs-link">🎵 @sscheesesteaks</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 S&amp;S CheeseSteaks · Richardson TX · All Rights Reserved</p>
          <p className="footer-flame">Made with 🔥 in Texas</p>
        </div>
      </div>
    </footer>
  )
}
