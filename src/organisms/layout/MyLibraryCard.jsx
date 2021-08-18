import React from "react";
import SecondaryBtn from "../buttons/SecondaryBtn";

import styles from "./MyLibraryCard.module.css";

function MyLibraryCard({ id, name, image }) {
  return (
    <div
      id={id}
      style={{ backgroundImage: `url(${image})` }}
      className={styles.container}
    >
      <div className={styles["left-panel"]}>
        <h1 className={styles.title}>{name}</h1>
      </div>
      <div className={styles["right-panel"]}>
        <h1 className={styles.completed}>% Completed</h1>
        <SecondaryBtn content="Play Game" />
      </div>
    </div>
  );
}

export default MyLibraryCard;
