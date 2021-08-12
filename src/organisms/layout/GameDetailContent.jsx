// Hooks
import React, { useEffect, useState } from "react";
import styles from "./GameDetailContent.module.css";
import GameDetailHero from "./GameDetailHero";

import { purchaseDB } from "../../helpers/fetch-functions";

function GameDetailContent({ data, inCart, twitchAccess }) {
  const [summary, setSummary] = useState("");

  const game = {
    heroImage: data.background_image,
    title: data.name,
    id: data.id,
    genres: data.genres,
    // genreOne: data.genres.length > 0 ? data.genres[0].name : "N/A",
    // genreTwo: data.genres.length > 1 ? data.genres[1].name : "N/A",
    rating: data.metacritic,
    slug: data.slug,
    numReviews: data.reviews_count,
    platforms: data.platforms,
    description: data.description,
    releaseDate: data.released,
  };

  useEffect(() => {
    async function fetchGameSummary(twitchAccess) {
      try {
        const bodyData = "fields *; where name = The Witcher 3: Wild Hunt;";
        const gameData = await purchaseDB(
          `http://localhost:3001/gamesummary/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "text/html",
              "Client-ID": "clientIDHere",
              Authorization: `Bearer ${twitchAccess.access_token}`,
            },
            body: JSON.stringify(bodyData),
          }
        );
      } catch {
        console.log("Error in game detail content component");
      }
    }

    fetchGameSummary(twitchAccess);
  }, []);

  return (
    <div>
      <div className={styles["hero-container"]}>
        <GameDetailHero inCart={inCart} data={data} />
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
            <h6 className={styles["game-detail-extras"]}>Platform</h6>
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
            <h6 className={styles["game-detail-extras"]}>Developers</h6>
            <h6>CD Projekt Rekt</h6>
          </div>
          <div className={styles.detail}>
            <h6 className={styles["game-detail-extras"]}>Release Date</h6>
            <h6>{game.releaseDate}</h6>
          </div>
          <div className={styles.detail}>
            <h6 className={styles["game-detail-extras"]}>Tags</h6>
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
