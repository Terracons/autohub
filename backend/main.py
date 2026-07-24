"""AutoHub API — FastAPI backend for the car & parts storefront.

Run with:  uvicorn main:app --reload --port 8000
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from data import (
    CARS,
    PARTS,
    CAR_CATEGORIES,
    PART_CATEGORIES,
    BRANDS,
)

app = FastAPI(title="AutoHub API", version="1.0.0")

# Allow the React dev server (and anything, for the demo) to call the API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"service": "AutoHub API", "status": "ok"}


@app.get("/api/meta")
def meta():
    """Storefront metadata used to populate filters and menus."""
    return {
        "car_categories": CAR_CATEGORIES,
        "part_categories": PART_CATEGORIES,
        "brands": BRANDS,
    }


@app.get("/api/cars")
def list_cars(
    category: str | None = None,
    brand: str | None = None,
    condition: str | None = None,
    featured: bool | None = None,
    q: str | None = None,
):
    """List cars with optional filters."""
    items = CARS
    if category:
        items = [c for c in items if c["category"] == category]
    if brand:
        items = [c for c in items if c["brand"].lower() == brand.lower()]
    if condition:
        items = [c for c in items if c["condition"].lower() == condition.lower()]
    if featured is not None:
        items = [c for c in items if c["featured"] == featured]
    if q:
        needle = q.lower()
        items = [
            c for c in items
            if needle in c["name"].lower() or needle in c["brand"].lower()
        ]
    return {"count": len(items), "items": items}


@app.get("/api/cars/{car_id}")
def get_car(car_id: str):
    for c in CARS:
        if c["id"] == car_id:
            return c
    raise HTTPException(status_code=404, detail="Car not found")


@app.get("/api/parts")
def list_parts(
    category: str | None = None,
    featured: bool | None = None,
    q: str | None = None,
):
    """List parts & accessories with optional filters."""
    items = PARTS
    if category:
        items = [p for p in items if p["category"] == category]
    if featured is not None:
        items = [p for p in items if p["featured"] == featured]
    if q:
        needle = q.lower()
        items = [
            p for p in items
            if needle in p["name"].lower() or needle in p["brand"].lower()
        ]
    return {"count": len(items), "items": items}


@app.get("/api/parts/{part_id}")
def get_part(part_id: str):
    for p in PARTS:
        if p["id"] == part_id:
            return p
    raise HTTPException(status_code=404, detail="Part not found")


@app.get("/api/featured")
def featured():
    """Featured cars and parts for the homepage."""
    return {
        "cars": [c for c in CARS if c["featured"]],
        "parts": [p for p in PARTS if p["featured"]],
    }
