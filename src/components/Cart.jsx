import React, { useEffect } from "react";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import PrimaryBtn from "../organisms/buttons/PrimaryBtn";

import { useSelector } from "react-redux";
import { useAuth } from "../contexts/AuthContext";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const { currentUser } = useAuth();

  useEffect(() => {}, [currentUser]);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        );
      })}
      <div className={styles["cart-totals"]}>
        <h1 className={styles.title}>Total Amount</h1>
        {!currentUser ? (
          <h1 className={styles.price}>''</h1>
        ) : (
          <h1 className={styles.price}>{totalAmount.toFixed(2)}</h1>
        )}
      </div>
      <div className={styles.ctas}>
        <PrimaryBtn content="Continue Shopping" />
        <PrimaryBtn content="Checkout" />
      </div>
    </div>
  );
}

export default Cart;
