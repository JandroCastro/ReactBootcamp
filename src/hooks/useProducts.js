import { useEffect, useReducer, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/products";
const MAX_RETRIES = 2;
let retries = 0;

const initialState = {
  products: [],
  loading: false,
};

const actionTypes = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_LOADING: "SET_LOADING",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  ADD_PRODUCT: "ADD_PRODUCT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case actionTypes.UPDATE_PRODUCT:
      const updatedProducts = state.products.map((product) =>
        product.id === action.payload.id ? { ...action.payload } : product
      );
      return {
        ...state,
        products: updatedProducts,
      };
    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case actionTypes.ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
};

export const useProducts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [refresh, setRefresh] = useState(false);
  const { products, loading } = state;

  useEffect(() => {
    getProducts();
  }, [refresh]);

  const getProducts = async () => {
    try {
      dispatch({ type: actionTypes.SET_LOADING, payload: true });
      const response = await axios.get(API_URL);
      dispatch({ type: actionTypes.SET_PRODUCTS, payload: response.data });
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      dispatch({ type: actionTypes.SET_LOADING, payload: false });
    }
  };

  const updateProduct = async (id, editedProduct) => {
    try {
      dispatch({ type: actionTypes.SET_LOADING, payload: true });

      const response = await axios.put(`${API_URL}/${id}`, editedProduct);
      const updatedProduct = {
        ...response.data,
        updatedAt: new Date().toISOString(),
      };

      dispatch({ type: actionTypes.UPDATE_PRODUCT, payload: updatedProduct });
      setRefresh(!refresh);
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      dispatch({ type: actionTypes.SET_LOADING, payload: false });
    }
  };

  const deleteProduct = async (id) => {
    try {
      dispatch({ type: actionTypes.SET_LOADING, payload: true });

      await axios.delete(`${API_URL}/${id}`);
      dispatch({ type: actionTypes.DELETE_PRODUCT, payload: id });
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      dispatch({ type: actionTypes.SET_LOADING, payload: false });
    }
  };

  const addProduct = async (newProduct) => {
    try {
      dispatch({ type: actionTypes.SET_LOADING, payload: true });

      const response = await axios.post(API_URL, newProduct);
      const addedProduct = response.data;

      dispatch({ type: actionTypes.ADD_PRODUCT, payload: addedProduct });
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      dispatch({ type: actionTypes.SET_LOADING, payload: false });
    }
  };

  return {
    products,
    loading,
    getProducts,
    updateProduct,
    deleteProduct,
    addProduct,
  };
};

export default useProducts;
