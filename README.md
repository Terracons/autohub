# AutoHub — Car & Parts Storefront

A car e-commerce starter inspired by the Makelele Jerseys layout, built with a
**React (Vite)** frontend and a **FastAPI** backend. Customers browse cars and
parts, then order via **WhatsApp** — no checkout or payment integration needed.
The design is a clean **light theme** only.

## What's inside

- **Cars** — new and foreign-used listings with year, mileage, transmission, fuel, specs.
- **Parts & accessories** — brakes, engine, wheels, electrical, accessories.
- **WhatsApp ordering** — every "Order" button opens a prefilled WhatsApp message.
- **Filters & search**, category browsing, product detail pages.
- Homepage with hero, categories, featured items, how-it-works, reviews, and FAQ.

```
car-store/
├── backend/        FastAPI app
│   ├── main.py         API endpoints
│   ├── data.py         Sample cars & parts (edit this to add your stock)
│   └── requirements.txt
└── frontend/       React + Vite app
    ├── src/
    │   ├── config.js   ← EDIT: WhatsApp number, store name, contact info
    │   ├── pages/      Home, Listing, ProductDetail, About
    │   └── components/ Navbar, Footer, ProductCard, etc.
    └── package.json
```

## 1. Run the backend

Requires Python 3.10+.

```bash
cd backend
python -m venv .venv
# Windows:  .venv\Scripts\activate
# macOS/Linux:  source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

API is now at http://localhost:8000 — try http://localhost:8000/api/cars
and the interactive docs at http://localhost:8000/docs.

## 2. Run the frontend

Requires Node.js 18+.

```bash
cd frontend
npm install
npm run dev
```

Open the URL Vite prints (default http://localhost:5173). The frontend expects
the backend on `http://localhost:8000`. To change that, copy `.env.example` to
`.env` and set `VITE_API_BASE`.

## 3. Make it yours

- **WhatsApp number & store info:** edit `frontend/src/config.js`
  (set `WHATSAPP_NUMBER` in international format, digits only, e.g. `2347030112427`).
- **Inventory:** edit `backend/data.py` — add/remove entries in `CARS` and `PARTS`.
  Swap the Unsplash `image` URLs for your own product photos.
- **Categories:** adjust `CAR_CATEGORIES` / `PART_CATEGORIES` in `backend/data.py`.
- **Colours & theme:** the light palette lives in the `:root` variables at the top
  of `frontend/src/index.css` (`--brand`, `--accent`, etc.).

## Build for production

```bash
cd frontend
npm run build      # outputs to frontend/dist
```

Serve `frontend/dist` from any static host and run the FastAPI backend behind it.
Set `VITE_API_BASE` to your deployed API URL before building.

## Notes

- Prices are shown in Naira (₦) and formatted automatically. Sample values are
  placeholders — update them in `data.py`.
- Product images use Unsplash demo URLs so the app looks complete out of the box;
  replace them with your real photos before launch.
