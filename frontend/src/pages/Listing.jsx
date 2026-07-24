import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { api } from "../api";
import ProductCard from "../components/ProductCard";

export default function Listing({ type }) {
  const isCar = type === "cars";
  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "";
  const q = params.get("q") || "";

  const [items, setItems] = useState([]);
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(q);

  useEffect(() => {
    api.meta().then((m) =>
      setCats(isCar ? m.car_categories : m.part_categories)
    );
  }, [isCar]);

  useEffect(() => {
    setLoading(true);
    const fetcher = isCar ? api.cars : api.parts;
    fetcher({ category, q })
      .then((r) => setItems(r.items))
      .finally(() => setLoading(false));
  }, [type, category, q, isCar]);

  const setCategory = (slug) => {
    const next = new URLSearchParams(params);
    if (slug) next.set("category", slug);
    else next.delete("category");
    setParams(next);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    const next = new URLSearchParams(params);
    if (search) next.set("q", search);
    else next.delete("q");
    setParams(next);
  };

  return (
    <>
      <div className="page-head">
        <div className="container">
          <div className="crumb">
            <Link to="/">Home</Link> / {isCar ? "Cars" : "Parts & Accessories"}
          </div>
          <h1>{isCar ? "Cars for Sale" : "Parts & Accessories"}</h1>
          <p>
            {isCar
              ? "Browse quality new and foreign-used cars. Tap Order to enquire on WhatsApp."
              : "Genuine spare parts and accessories at honest prices, shipped nationwide."}
          </p>
        </div>
      </div>

      <section className="section container">
        <form className="filters" onSubmit={submitSearch}>
          <button
            type="button"
            className={`chip ${!category ? "active" : ""}`}
            onClick={() => setCategory("")}
          >
            All
          </button>
          {cats.map((c) => (
            <button
              type="button"
              key={c.slug}
              className={`chip ${category === c.slug ? "active" : ""}`}
              onClick={() => setCategory(c.slug)}
            >
              {c.name}
            </button>
          ))}
          <input
            className="search-input"
            placeholder={`Search ${isCar ? "cars" : "parts"}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>

        {loading ? (
          <div className="loading">Loading…</div>
        ) : items.length ? (
          <div className="grid">
            {items.map((item) => (
              <ProductCard key={item.id} item={item} type={type} />
            ))}
          </div>
        ) : (
          <div className="empty">
            No {isCar ? "cars" : "parts"} match your filters. Try clearing them.
          </div>
        )}
      </section>
    </>
  );
}
