import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";

import styles from "./WishListCard.module.css";

function WishListCard() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles["left-panel"]}>
          <h1 className={styles.title}>Title</h1>
        </div>
        <div className={styles["right-panel"]}>
          <h1 className={styles.price}>$49.99</h1>
          <PrimaryBtn content="Add to Cart" />
        </div>
      </div>
    </div>
  );
}

export default WishListCard;
