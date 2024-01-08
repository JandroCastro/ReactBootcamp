import React, { useEffect, useState } from "react";
import "./ProductsSection.css";
import { useFiltro } from "../../context/FilterContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import useAuth from "../../hooks/useAuth";
import AddProductModal from "../../components/AddProductModal/AddProductModal";

function ProductsSection() {
  const { filtro } = useFiltro();
  const { products, loading, getProducts, addProduct } = useProducts();
  const { isLoggedIn, userData } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAdmin = isLoggedIn && userData.role === "admin";

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleAddProduct = () => {
    openModal();
  };

  return (
    <>
      {isModalOpen && (
        <AddProductModal
          closeModal={closeModal}
          addProduct={(newProduct) => {
            addProduct(newProduct);
            closeModal();
          }}
        />
      )}
      {loading ? (
        <div className="spinner">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="products-section">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={`${product.id}-${product.updatedAt}`}
                product={product}
                isAdmin
                isLoggedIn
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      )}
      {isAdmin && (
        <div className="add-product-btn-container">
          <button className="add-product-btn" onClick={handleAddProduct}>
            Add New Product
          </button>
        </div>
      )}
    </>
  );
}

export default ProductsSection;
