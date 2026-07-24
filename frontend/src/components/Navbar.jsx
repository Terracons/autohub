import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { whatsappLink, STORE } from "../config";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const order = whatsappLink("Hi AutoHub, I'd like to place an order.");
  const close = () => setOpen(false);

  return (
    <>
      <div className="marquee">
        <div className="marquee__track">
          {[...Array(2)].map((_, i) => (
            <span key={i}>
              🚗 Quality new & foreign-used cars &nbsp;•&nbsp; 🔧 Genuine parts &
              accessories &nbsp;•&nbsp; 📦 {STORE.freeDeliveryNote} &nbsp;•&nbsp; 💬
              Order fast on WhatsApp &nbsp;•&nbsp;
            </span>
          ))}
        </div>
      </div>

      <nav className="nav">
        <div className="container nav__inner">
          <Link to="/" className="nav__logo" onClick={close}>
            <span className="nav__logo-mark">A</span>
            Auto<b>Hub</b>
          </Link>

          <div className={`nav__links ${open ? "open" : ""}`}>
            <NavLink to="/cars" onClick={close}>Cars</NavLink>
            <NavLink to="/parts" onClick={close}>Parts & Accessories</NavLink>
            <NavLink to="/about" onClick={close}>About</NavLink>
            <a href="/#faq" onClick={close}>FAQ</a>
          </div>

          <div className="nav__actions">
            <a
              className="btn btn-wa"
              href={order}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="nav__wa-full">Order on WhatsApp</span>
              <span className="nav__wa-short">Order</span>
            </a>
            <button
              className="nav__toggle"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
