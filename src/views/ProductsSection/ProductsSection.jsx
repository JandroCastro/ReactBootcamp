import React from "react";
import "./ProductsSection.css";
import data from "../../fakeapi/data.json";
import { useFiltro } from "../../context/FilterContext";
import ProductCard from "../../components/ProductCard/ProductCard";

function ProductsSection() {
  const { filtro } = useFiltro();

  const products = data.filter((product) =>
    product.title.toLowerCase().includes(filtro.toLowerCase())
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
