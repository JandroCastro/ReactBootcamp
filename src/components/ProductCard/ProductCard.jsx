import React, { useState, useRef, useEffect } from "react";
import "./ProductCard.css";
import { useCart } from "../../hooks/useCart";
import { Link, useLocation } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import AddToCartButton from "../AddtoCartButton/AddToCartButton";
import EditIcon from "../../icons/EditIcon.svg";
import DeleteIcon from "../../icons/DeleteIcon.svg";
import ProductEditModal from "../ProductEditModal/ProductEditModal";

const ProductCard = ({ product, isAdmin, isLoggedIn }) => {
  const { id, title, price, description, image, rating } = product;
  const { deleteProduct } = useProducts();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-card" key={id}>
      {isAdmin && (
        <div className="admin-icons">
          <img src={EditIcon} alt="Edit" onClick={openModal} />
          <img src={DeleteIcon} alt="" onClick={() => deleteProduct(id)} />
        </div>
      )}
      <Link to={`/product/${id}`}>
        <div className="product-image-container">
          <img className="product-image" src={image} alt={title} />
        </div>
        <div className="product-info">
          <h3 className="product-title">{title}</h3>
          <p className="product-price">{`$${price}`}</p>
        </div>
      </Link>
      {isLoggedIn && <AddToCartButton item={product} />}
      {isModalOpen && (
        <ProductEditModal product={product} closeModal={closeModal} />
      )}
    </div>
  );
};

export default ProductCard;
