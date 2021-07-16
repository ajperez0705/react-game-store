import React from "react";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import PrimaryBtn from "../buttons/PrimaryBtn";

function Cart() {
  return (
    <div>
      <CartItem />
      <div className={styles["cart-totals"]}>
        <h1 className={styles.title}>Total Amount</h1>
        <h1 className={styles.price}>Price</h1>
      </div>
      <div className={styles.ctas}>
        <PrimaryBtn content="Continue Shopping" />
        <PrimaryBtn content="Checkout" />
      </div>
    </div>
  );
}

export default Cart;
