import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetchProducts().then((all) => setFeatured(all.slice(0, 4)));
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Everything your learner needs, in one place</h1>
          <p>
            Scholar stocks CBC-approved textbooks and learning materials for
            Kenyan schools, alongside Cambridge, IB and IGCSE resources for
            international schools.
          </p>
          <div className="hero-actions">
            <Link to="/products?category=cbc" className="btn btn-primary">
              Shop CBC Supplies
            </Link>
            <Link to="/products?category=international" className="btn btn-outline">
              Shop International
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <h2 style={{ marginTop: 40 }}>Featured items</h2>
        <div className="product-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </>
  );
}
