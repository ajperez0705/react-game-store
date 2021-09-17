// Hooks
import React from "react";
import styles from "./GameDetailContent.module.css";
import GameDetailHero from "./GameDetailHero";

function GameDetailContent({
  data,
  inCart,
  inWishlist,
  inLibrary,
  gameSummary,
}) {
  const game = {
    heroImage: data.background_image,
    title: data.name,
    id: data.id,
    genres: data.genres,
    summary: gameSummary,
    // esrbRating: data.esrb_rating.name,
    // genreOne: data.genres.length > 0 ? data.genres[0].name : "N/A",
    // genreTwo: data.genres.length > 1 ? data.genres[1].name : "N/A",
    rating: data.metacritic,
    slug: data.slug,
    numReviews: data.reviews_count,
    platforms: data.platforms,
    description: data.description,
    releaseDate: data.released,
  };

  return (
    <div>
      <div className={styles["hero-container"]}>
        <GameDetailHero
          inWishlist={inWishlist}
          inLibrary={inLibrary}
          inCart={inCart}
          data={data}
        />
      </div>
      <div className={styles.container}>
        <div className={styles["primary-container"]}>
          <h3>Game Summary</h3>
          <p className={styles["game-summary"]}>{game.summary}</p>
        </div>
        <div className={styles["secondary-container"]}>
          <div className={styles["metacritic-rating"]}>
            <h3>Metacritic</h3>
            <h4>{game.rating}</h4>
          </div>
          <div className={styles["metacritic-rating"]}>
            <h3>Reviews</h3>
            <h4>{game.numReviews}</h4>
          </div>
        </div>
        <div className={styles["secondary-container"]}>
          <div className={styles.detail}>
            <h3 className={styles["game-detail-extras"]}>Platform</h3>
            <div className={styles["platforms-container"]}>
              {!game.platforms ? (
                <h3>Loading</h3>
              ) : (
                game.platforms.map((platform) => {
                  return (
                    <span className={styles.spans} key={platform.platform.id}>
                      {platform.platform.name}
                    </span>
                  );
                })
              )}
            </div>
          </div>
          <div className={styles.detail}>
            <h3 className={styles["game-detail-extras"]}>ESRB Rating</h3>
            <h6>{game.esrbRating}</h6>
          </div>
          <div className={styles.detail}>
            <h3 className={styles["game-detail-extras"]}>Release Date</h3>
            <h6>{game.releaseDate}</h6>
          </div>
          <div className={styles.detail}>
            <h3 className={styles["game-detail-extras"]}>Tags</h3>
            <div>
              {!game.genres ? (
                <h3>Loading</h3>
              ) : (
                game.genres.map((genre) => {
                  return (
                    <span className={styles.spans} key={genre.id}>
                      {genre.name}
                    </span>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetailContent;
