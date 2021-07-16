import React from "react";
import styles from "../layout/SmallProdCard.module.css";
// import { Link } from "react-router-dom";

function SmallProdCard({ title }) {
  return (
    <div className={styles.container}>
      <img src="" alt="" />
      <div className={styles["card-content"]}>
        <div className={styles["card-content-top"]}>
          <p className={styles.genre}>Action</p>
          <h6 className={styles.rating}>92</h6>
        </div>
        <div className={styles["card-content-bottom"]}>
          <h3 className={styles.title}>Title</h3>
          <h6 className={styles.price}>$49.99</h6>
        </div>
      </div>
    </div>
  );
}

export default SmallProdCard;
