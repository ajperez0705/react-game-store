import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";
import styles from "../layout/HeroProdCard.module.css";

function HeroProdCard({ data }) {
  const game = {
    id: data.id,
    name: data.name,
    cardImage: data.background_image,
    // screenShotOne: data.short_screenshots,
    // screenshotTwo: data.short_screenshots[2].image,
    // screenshotThree: data.short_screenshots[3].image,
  };
  console.log(game.cardImage);

  return (
    <div>
      <div
        key={game.id}
        style={{ backgroundImage: `url(${game.cardImage})` }}
        className={styles.container}
      >
        <div className={styles["left-panel"]}>
          <h1 className={styles.title}>{game.name}</h1>
          <div className={styles.ctas}>
            <PrimaryBtn className={styles.btn} content="Add to Cart" />
            <SecondaryBtn className={styles.btn} content="Learn More" />
          </div>
        </div>
        <div className={styles["right-panel"]}>
          <img
            className={styles["hero-screenshots"]}
            // src={`url(${game.screenShotOne})`}
            alt=""
          />
          <img
            className={styles["hero-screenshots"]}
            // src={game.screenshotTwo}
            alt=""
          />
          <img
            className={styles["hero-screenshots"]}
            // src={game.screenshotThree}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeroProdCard;
