import React from "react";
import styles from "../layout/MediumProdCard.module.css";

function MediumProdCard({ data }) {
  // const gameList = data.map((game) => {});

  return (
    <div>
      <div
        className={styles.container}
        // key={game.id}
        // style={{ backgroundImage: "url(" + game.cardImage + ")" }}
      >
        <div className={styles["card-content"]}>
          <div className={styles["card-content-top"]}>
            <p className={styles.genre}>
              {/* {game.genreOne}, {game.genreTwo} */}
            </p>
            <h6 className={styles.rating}>92</h6>
          </div>
          <div className={styles["card-content-bottom"]}>
            <h3 className={styles.title}>Title</h3>
            <h6 className={styles.price}>$49.99</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediumProdCard;
