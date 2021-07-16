import React from "react";
import SecondaryBtn from "../buttons/SecondaryBtn";

import styles from "./MyLibraryCard.module.css";

function MyLibraryCard() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles["left-panel"]}>
          <h1 className={styles.title}>Title</h1>
        </div>
        <div className={styles["right-panel"]}>
          <h1 className={styles.completed}>% Completed</h1>
          <SecondaryBtn content="Add to Cart" />
        </div>
      </div>
    </div>
  );
}

export default MyLibraryCard;
