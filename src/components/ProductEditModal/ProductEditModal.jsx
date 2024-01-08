import React, { useState } from "react";
import "./ProductEditModal.css";
import axios from "axios";
import { useProducts } from "../../hooks/useProducts";

function ProductEditModal({ product, closeModal }) {
  const [editedFields, setEditedFields] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
  });
  const { updateProduct } = useProducts();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "price" ? parseFloat(value) : value;
    setEditedFields((prevFields) => ({
      ...prevFields,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...product,
      ...editedFields,
    };

    await updateProduct(product.id, updatedProduct);
    closeModal();
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={editedFields.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={editedFields.price}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={editedFields.description}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default ProductEditModal;
