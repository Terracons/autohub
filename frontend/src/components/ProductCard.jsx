import { Link } from "react-router-dom";
import { formatNaira, whatsappLink } from "../config";

export default function ProductCard({ item, type }) {
  const isCar = type === "cars";
  const detail = `/${type}/${item.id}`;
  const conditionClass =
    item.condition === "New" ? "new" : item.condition ? "used" : "";

  const orderMsg = isCar
    ? `Hi AutoHub, I'm interested in the ${item.name} (${item.year}) listed at ${formatNaira(
        item.price
      )}. Is it available?`
    : `Hi AutoHub, I'd like to order the ${item.name} (${formatNaira(
        item.price
      )}). Is it in stock?`;

  return (
    <article className="card">
      <div className="card__media">
        <Link to={detail}>
          <img src={item.image} alt={item.name} loading="lazy" />
        </Link>
        {item.condition && (
          <span className={`badge ${conditionClass}`}>{item.condition}</span>
        )}
      </div>
      <div className="card__body">
        <span className="card__brand">{item.brand}</span>
        <h3 className="card__title">
          <Link to={detail}>{item.name}</Link>
        </h3>

        <div className="card__meta">
          {isCar ? (
            <>
              <span>{item.year}</span>
              <span>{item.transmission}</span>
              <span>
                {item.mileage_km === 0
                  ? "Brand new"
                  : `${item.mileage_km.toLocaleString()} km`}
              </span>
              <span>{item.fuel}</span>
            </>
          ) : (
            <span>Fits: {item.fits}</span>
          )}
        </div>

        <div className="card__foot">
          <div className="card__price">
            {formatNaira(item.price)}
            {isCar && <small>Price negotiable</small>}
          </div>
          <a
            className="btn btn-wa"
            href={whatsappLink(orderMsg)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order
          </a>
        </div>
      </div>
    </article>
  );
}
