import React from "react";
import styles from "./CartItem.module.css";

function CartItem() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles["left-cart-item"]}>
          <img
            className={styles["cart-img"]}
            src="https://www.rockstargames.com/V/img/global/order/mobile-cover.jpg"
            alt=""
          />
          <h2 className={styles.title}>Title</h2>
        </div>
        <div className={styles["right-cart-item"]}>
          <h4 className={styles.price}>Price</h4>
          <button className={styles["remove-btn"]}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
