import { Link } from "react-router-dom";
import { STORE, whatsappLink } from "../config";

export default function About() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <div className="crumb">
            <Link to="/">Home</Link> / About
          </div>
          <h1>About {STORE.name}</h1>
          <p>{STORE.tagline} — built on trust, quality, and honest service.</p>
        </div>
      </div>

      <section className="section container">
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 18, color: "var(--ink-soft)" }}>
            {STORE.name} is a trusted dealer of quality new and foreign-used
            vehicles, plus genuine spare parts and accessories. We started with a
            simple promise: make buying a car — and keeping it running — honest,
            easy, and stress-free.
          </p>
          <p style={{ color: "var(--ink-soft)", marginTop: 16 }}>
            Every car we list is inspected for engine health, body condition, and
            documentation. Every part we stock is sourced from trusted brands and
            checked for fitment. You're always welcome to inspect before you pay,
            and we deliver nationwide across Nigeria.
          </p>

          <div className="steps mt-40">
            <div className="step">
              <div className="step__num">✓</div>
              <h3>Inspected Cars</h3>
              <p>Engine, body, and papers checked before every listing.</p>
            </div>
            <div className="step">
              <div className="step__num">★</div>
              <h3>Genuine Parts</h3>
              <p>Trusted brands, correct fitment, fair prices.</p>
            </div>
            <div className="step">
              <div className="step__num">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Nationwide shipping and same-day Lagos options.</p>
            </div>
          </div>

          <div className="cta-band mt-40" style={{ marginTop: 48 }}>
            <h2>Have a question?</h2>
            <p>Our team is a message away. Reach us on WhatsApp anytime.</p>
            <a
              className="btn btn-wa btn-lg"
              href={whatsappLink("Hi AutoHub, I'd like to make an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
