import React from "react";
import styles from "./GameDetailContent.module.css";

function GameDetailContent() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles["primary-container"]}>
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quisquam repellat quam vel molestias impedit possimus nisi. Fugit
            aliquam hic assumenda molestias explicabo inventore harum totam
            consequuntur odit. Blanditiis, nulla?
          </p>
        </div>
        <div className={styles["secondary-container"]}>
          <div className={styles["metacritic-rating"]}>
            <h3>Metacritic</h3>
            <h3>93</h3>
          </div>
          <div className={styles["metacritic-rating"]}>
            <h3>Reviews</h3>
            <h3>4.6/5</h3>
          </div>
        </div>
        <div className={styles["secondary-container"]}>
          <div className={styles.detail}>
            <h6>Platform</h6>
            <h6>Playstation, Xbox, PC</h6>
          </div>
          <div className={styles.detail}>
            <h6>Developers</h6>
            <h6>CD Projekt Rekt</h6>
          </div>
          <div className={styles.detail}>
            <h6>Release Date</h6>
            <h6>May 20, 2021</h6>
          </div>
          <div className={styles.detail}>
            <h6>Tags</h6>
            <h6>Action, Adventure, Puzzle</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetailContent;
