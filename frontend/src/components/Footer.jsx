import { Link } from "react-router-dom";
import { STORE, whatsappLink } from "../config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <b>Auto<span style={{ color: "#f97316" }}>Hub</span></b>
          <p>
            {STORE.tagline}. Trusted dealer of quality cars and genuine spare
            parts, delivered across Nigeria.
          </p>
          <div className="footer__social">
            <a href={STORE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">◎</a>
            <a href={STORE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
            <a href={whatsappLink("Hi AutoHub")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">✆</a>
          </div>
        </div>

        <div>
          <h4>Shop</h4>
          <Link to="/cars">All Cars</Link>
          <Link to="/cars?category=suv">SUVs</Link>
          <Link to="/cars?category=sedan">Sedans</Link>
          <Link to="/parts">Parts & Accessories</Link>
        </div>

        <div>
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <a href="/#how">How It Works</a>
          <a href="/#reviews">Reviews</a>
          <a href="/#faq">FAQ</a>
        </div>

        <div>
          <h4>Contact</h4>
          <a href={`tel:${STORE.phone}`}>{STORE.phone}</a>
          <a href={`mailto:${STORE.email}`}>{STORE.email}</a>
          <span style={{ display: "block", fontSize: 14, marginBottom: 9 }}>
            {STORE.address}
          </span>
        </div>
      </div>
      <div className="container footer__bottom">
        © {new Date().getFullYear()} {STORE.name}, Lagos. • Quality cars & genuine
        parts, delivered across Nigeria.
      </div>
    </footer>
  );
}
