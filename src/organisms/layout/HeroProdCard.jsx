import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";
import styles from "../layout/HeroProdCard.module.css";

function HeroProdCard({ data }) {
  const game = {
    id: data.id,
    name: data.name,
    cardImage: data.background_image,
    screenShots: data.short_screenshots,
  };

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
          {/* {!game.screenShots ? (
            <h3>Loading</h3>
          ) : (
            game.screenShots.map((screenShot) => {
              return (
                <img
                  key={screenShot.id}
                  className={styles["hero-screenshots"]}
                  src={`url(${screenShot.image})`}
                  alt=""
                />
              );
            })
          )} */}
        </div>
      </div>
    </div>
  );
}

export default HeroProdCard;
