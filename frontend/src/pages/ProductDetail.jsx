import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../api";
import { formatNaira, whatsappLink } from "../config";

export default function ProductDetail({ type }) {
  const isCar = type === "cars";
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetcher = isCar ? api.car : api.part;
    fetcher(id)
      .then(setItem)
      .catch(() => setNotFound(true));
  }, [id, isCar]);

  if (notFound) {
    return (
      <div className="section container empty">
        <p>Sorry, we couldn't find that item.</p>
        <Link to={`/${type}`} className="btn btn-primary mt-40">
          Back to {isCar ? "cars" : "parts"}
        </Link>
      </div>
    );
  }

  if (!item) return <div className="section container loading">Loading…</div>;

  const orderMsg = isCar
    ? `Hi AutoHub, I'm interested in the ${item.name} (${item.year}) listed at ${formatNaira(
        item.price
      )}. Is it still available and can I inspect it?`
    : `Hi AutoHub, I'd like to order the ${item.name} (${formatNaira(
        item.price
      )}). Please confirm fitment and availability.`;

  return (
    <>
      <div className="page-head">
        <div className="container">
          <div className="crumb">
            <Link to="/">Home</Link> /{" "}
            <Link to={`/${type}`}>{isCar ? "Cars" : "Parts"}</Link> / {item.name}
          </div>
        </div>
      </div>

      <div className="container pd">
        <div className="pd__img">
          <img src={item.image} alt={item.name} />
        </div>

        <div>
          <span className="card__brand">{item.brand}</span>
          <h1>{item.name}</h1>
          {item.condition && (
            <span className={`badge ${item.condition === "New" ? "new" : "used"}`}
              style={{ position: "static", display: "inline-block", marginTop: 8 }}>
              {item.condition}
            </span>
          )}

          <div className="pd__price">{formatNaira(item.price)}</div>
          <p className="pd__desc">{item.description}</p>

          {isCar ? (
            <div className="specs">
              <Spec label="Year" value={item.year} />
              <Spec label="Transmission" value={item.transmission} />
              <Spec label="Fuel" value={item.fuel} />
              <Spec
                label="Mileage"
                value={item.mileage_km === 0 ? "Brand new" : `${item.mileage_km.toLocaleString()} km`}
              />
              <Spec label="Colour" value={item.color} />
              {Object.entries(item.specs || {}).map(([k, v]) => (
                <Spec key={k} label={k} value={v} />
              ))}
            </div>
          ) : (
            <div className="specs">
              <Spec label="Brand" value={item.brand} />
              <Spec label="Fits" value={item.fits} />
              <Spec label="Condition" value={item.condition} />
              <Spec label="Category" value={item.category} />
            </div>
          )}

          <a
            className="btn btn-wa btn-lg btn-block mt-40"
            href={whatsappLink(orderMsg)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {isCar ? "Enquire on WhatsApp" : "Order on WhatsApp"}
          </a>
          <p className="pd__note">
            Secure enquiry via WhatsApp • {isCar ? "Inspection welcome before payment" : "Fitment confirmed before you pay"}
          </p>
        </div>
      </div>
    </>
  );
}

function Spec({ label, value }) {
  return (
    <div className="spec">
      <span>{label}</span>
      <b>{value}</b>
    </div>
  );
}
