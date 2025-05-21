import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Shop.module.css";
const products = [
  {
    id: 1,
    name: "Green Oversized Tee",
    price: 499,
    image: "/images/blue-shirt.png",
  },
  {
    id: 2,
    name: "Black Hoodie",
    price: 699,
    image: "/assets/product.png",
  },
];

const Shop = () => {
  const navigate = useNavigate();

  const handleAddToCart = (productId) => {
    navigate("/cart");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shop</h1>
      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.name} className={styles.image} />
            <h3>{product.name}</h3>
            <p>₱{product.price}</p>
            <button onClick={() => handleAddToCart(product.id)} className={styles.button}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
