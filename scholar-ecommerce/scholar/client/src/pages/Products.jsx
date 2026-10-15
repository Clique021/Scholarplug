import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../api.js";
import ProductCard from "../components/ProductCard.jsx";

const TABS = [
  { label: "All", value: "" },
  { label: "CBC (Kenya)", value: "cbc" },
  { label: "International", value: "international" },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts(category ? { category } : {})
      .then(setProducts)
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="container">
      <h1 style={{ marginTop: 30 }}>School Supplies</h1>
      <div className="category-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            className={`tab ${category === tab.value ? "active" : ""}`}
            onClick={() =>
              setSearchParams(tab.value ? { category: tab.value } : {})
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading products…</p>
      ) : products.length === 0 ? (
        <div className="empty-state">No products found in this category.</div>
      ) : (
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
