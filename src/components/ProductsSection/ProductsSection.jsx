import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsSection.css";
import data from "../../fakeapi/data.json";

function ProductsSection({ filtro }) {
  const products = data.filter(
    (product) => product.title.toLowerCase().includes(filtro.toLowerCase())
    // console.log(filtro)
  );

  return (
    <div className="products-section">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsSection;
