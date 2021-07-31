// Hooks
import React from "react";
import styles from "./GameDetailContent.module.css";
import HeroProdCard from "./HeroProdCard";

function GameDetailContent({ data }) {
  const game = {
    heroImage: data.background_image,
    title: data.name,
    id: data.id,
    genreOne: data.genres.length > 0 ? data.genres[0].name : "N/A",
    genreTwo: data.genres.length > 1 ? data.genres[1].name : "N/A",
    rating: data.metacritic,
    slug: data.slug,
    numReviews: data.reviews_count,
    platforms: data.platforms,
    description: data.description,
    releaseDate: data.released,
  };

  console.log(game.platforms, data.genres);

  return (
    <div>
      <div className={styles["hero-container"]}>
        <HeroProdCard data={data} />
      </div>
      <div className={styles.container}>
        <div className={styles["primary-container"]}>
          <h3>{game.title}</h3>
          <p>{game.description}</p>
        </div>
        <div className={styles["secondary-container"]}>
          <div className={styles["metacritic-rating"]}>
            <h3>Metacritic</h3>
            <h3>{game.rating}</h3>
          </div>
          <div className={styles["metacritic-rating"]}>
            <h3>Reviews</h3>
            <h3>{game.numReviews}</h3>
          </div>
        </div>
        <div className={styles["secondary-container"]}>
          <div className={styles.detail}>
            <h6>Platform</h6>
            <div>
              {!game.platforms ? (
                <h3>Loading</h3>
              ) : (
                game.platforms.map((platform) => {
                  return (
                    <h4 key={platform.platform.id}>{platform.platform.name}</h4>
                  );
                })
              )}
            </div>
          </div>
          <div className={styles.detail}>
            <h6>Developers</h6>
            <h6>CD Projekt Rekt</h6>
          </div>
          <div className={styles.detail}>
            <h6>Release Date</h6>
            <h6>{game.releaseDate}</h6>
          </div>
          <div className={styles.detail}>
            <h6>Tags</h6>
            <h6>
              {!game.genreOne && !game.genreTwo ? (
                <h3>Loading</h3>
              ) : (
                `${game.genreOne}, ${game.genreOne}`
              )}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetailContent;
