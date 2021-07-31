import React from "react";
import styles from "../layout/MediumProdCard.module.css";

function MediumProdCard({ data }) {
  const game = {
    id: data.id,
    name: data.name,
    cardImage: data.background_image,
    genreOne: data.genres.length > 0 ? data.genres[0].name : "N/A",
    genreTwo: data.genres.length > 1 ? data.genres[1].name : "N/A",
    rating: data.metacritic,
    // screenShotOne: data.short_screenshots,
    // screenshotTwo: data.short_screenshots[2].image,
    // screenshotThree: data.short_screenshots[3].image,
  };

  return (
    <div>
      <div
        key={game.id}
        style={{ backgroundImage: "url(" + game.cardImage + ")" }}
        className={styles.container}
      >
        <img src="" alt="" />
        <div className={styles["card-content"]}>
          <div className={styles["card-content-top"]}>
            <p className={styles.genre}>
              {game.genreOne}, {game.genreTwo}
            </p>
            <h6 className={styles.rating}>{game.rating}</h6>
          </div>
          <div className={styles["card-content-bottom"]}>
            <h3 className={styles.title}>{game.name}</h3>
            <h6 className={styles.price}>$49.99</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediumProdCard;
