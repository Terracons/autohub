import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";
import ProductCard from "../components/ProductCard";
import { whatsappLink } from "../config";

export default function Home() {
  const [featured, setFeatured] = useState({ cars: [], parts: [] });
  const [cats, setCats] = useState([]);

  useEffect(() => {
    api.featured().then(setFeatured).catch(() => {});
    api.meta().then((m) => setCats(m.car_categories)).catch(() => {});
  }, []);

  return (
    <>
      <Hero />
      <Categories cats={cats} />
      <Featured
        title="Featured Cars"
        eyebrow="Handpicked This Week"
        sub="Our most-requested cars right now — inspected, clean, and ready to drive."
        items={featured.cars}
        type="cars"
        moreLink="/cars"
      />
      <HowItWorks />
      <Featured
        title="Popular Parts & Accessories"
        eyebrow="Genuine Quality"
        sub="Brake pads, filters, wheels and more — original parts at honest prices."
        items={featured.parts}
        type="parts"
        moreLink="/parts"
      />
      <Reviews />
      <FAQ />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <span className="hero__badge">
            <span className="dot" /> Trusted dealer • 500+ happy customers
          </span>
          <h1>
            Find your next <em>car</em> and the <em>parts</em> to keep it running.
          </h1>
          <p className="lead">
            Quality new and foreign-used vehicles plus genuine spare parts and
            accessories. Inspect, chat, and order in minutes — all on WhatsApp.
          </p>
          <div className="hero__cta">
            <Link to="/cars" className="btn btn-primary btn-lg">Browse Cars</Link>
            <Link to="/parts" className="btn btn-outline btn-lg">Shop Parts</Link>
          </div>
          <div className="hero__stats">
            <div><b>200+</b><span>Cars sold</span></div>
            <div><b>50+</b><span>Parts in stock</span></div>
            <div><b>4.9★</b><span>Customer rating</span></div>
          </div>
        </div>
        <div className="hero__media">
          <img
            src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900&q=80"
            alt="Featured car"
          />
          <div className="hero__float">
            <span className="ic">✓</span>
            <div>
              <b>Verified & Inspected</b>
              <span>Every car checked before listing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories({ cats }) {
  return (
    <section className="section container">
      <div className="section-head">
        <div className="eyebrow">Browse By Type</div>
        <h2>Shop Cars by Category</h2>
        <p>From family SUVs to weekend sports cars — find the right fit.</p>
      </div>
      <div className="cat-grid">
        {cats.map((c) => (
          <Link key={c.slug} to={`/cars?category=${c.slug}`} className="cat-card">
            <img src={c.image} alt={c.name} loading="lazy" />
            <div className="cat-card__label">{c.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Featured({ title, eyebrow, sub, items, type, moreLink }) {
  return (
    <section className="section" style={{ background: type === "cars" ? "#fff" : "transparent" }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
          <p>{sub}</p>
        </div>
        <div className="grid">
          {items.slice(0, 8).map((item) => (
            <ProductCard key={item.id} item={item} type={type} />
          ))}
        </div>
        <div style={{ textAlign: "center" }} className="mt-40">
          <Link to={moreLink} className="btn btn-outline btn-lg">
            View all →
          </Link>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ["01", "Browse & Pick", "Explore our cars and parts. Filter by type, brand, or budget to find what you need."],
    ["02", "Chat on WhatsApp", "Tap Order and send us a message. We confirm availability, condition, and price."],
    ["03", "Inspect & Receive", "Inspect the car or part, pay securely, and we deliver to your door nationwide."],
  ];
  return (
    <section className="section" id="how" style={{ background: "#fff" }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Simple & Safe</div>
          <h2>How It Works</h2>
          <p>Three easy steps from browsing to driving.</p>
        </div>
        <div className="steps">
          {steps.map(([num, h, p]) => (
            <div className="step" key={num}>
              <div className="step__num">{num}</div>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const data = [
    ["Ordered a Foreign-used CR-V. Exactly as described, clean papers, delivered to Lekki the next day.", "TA", "Tunde A.", "Lekki, Lagos"],
    ["Got genuine brake pads and an oil filter for my Camry. Fair prices and fast delivery to Abuja.", "FO", "Funmi O.", "Abuja"],
    ["Bought my first car through AutoHub. They were patient, honest, and let me inspect before paying.", "CE", "Chuka E.", "Port Harcourt"],
  ];
  return (
    <section className="section container" id="reviews">
      <div className="section-head">
        <div className="eyebrow">Social Proof</div>
        <h2>Trusted by Drivers Across Nigeria</h2>
        <p>Hundreds of five-star reviews from customers just like you.</p>
      </div>
      <div className="reviews">
        {data.map(([quote, ini, name, place]) => (
          <div className="review" key={name}>
            <div className="review__stars">★★★★★</div>
            <p>"{quote}"</p>
            <div className="review__who">
              <div className="review__ava">{ini}</div>
              <div>
                <b>{name}</b>
                <span>{place}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const qa = [
    ["Are your cars inspected?", "Yes. Every car is checked for engine, body, and documentation before it is listed, so what you see is what you get."],
    ["Can I inspect before paying?", "Absolutely. You are welcome to inspect any car in person or via video call before making payment."],
    ["Are your parts genuine?", "We stock genuine and high-quality OEM parts from trusted brands. We will confirm fitment for your exact model before you order."],
    ["Do you deliver outside Lagos?", "Yes, we deliver cars and ship parts nationwide across Nigeria. Lagos orders often qualify for same-day delivery."],
    ["How do I place an order?", "Tap any Order on WhatsApp button, tell us the car or part, and we will guide you from there."],
  ];
  return (
    <section className="section" id="faq" style={{ background: "#fff" }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Questions</div>
          <h2>Frequently Asked</h2>
          <p>Still deciding? Here's what most customers ask before buying.</p>
        </div>
        <div className="faq">
          {qa.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section container">
      <div className="cta-band">
        <h2>Ready to find your ride?</h2>
        <p>Send us a message and get your preferred car or part sorted today.</p>
        <a
          className="btn btn-wa btn-lg"
          href={whatsappLink("Hi AutoHub, I'd like to make an enquiry.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
