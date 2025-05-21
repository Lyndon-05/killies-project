import React from "react";
import styles from "./Cart.module.css";

const sampleCartItems = [
  {
    id: 1,
    name: "Green Oversized Tee",
    price: 499,
    quantity: 1,
    image: "/images/blue-shirt.png",
  },
  {
    id: 2,
    name: "Black Hoodie",
    price: 699,
    quantity: 2,
    image: "/assets/product.png",
  },
];

export default function Cart() {
  const handleRemove = (id) => {
   
    console.log("Removing", id);
  };

  const total = sampleCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Cart</h1>
      <div className={styles.cartItems}>
        {sampleCartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.name} className={styles.cartImage} />
            <div className={styles.cartDetails}>
              <h3>{item.name}</h3>
              <p>₱{item.price} x {item.quantity}</p>
              <p>Total: ₱{item.price * item.quantity}</p>
            </div>
            <button
              className={styles.removeButton}
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className={styles.total}>Total: ₱{total}</div>
      <button className={styles.checkoutButton}>Checkout</button>
    </div>
  );
}
