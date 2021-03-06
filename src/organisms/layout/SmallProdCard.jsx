import React from "react";
import { Fragment } from "react";
import styles from "../layout/SmallProdCard.module.css";
import { Link } from "react-router-dom";

function SmallProdCard({ data }) {
  const game = {
    id: data.id,
    name: data.name,
    cardImage: data.background_image,
    genreOne: data.genres.length > 0 ? data.genres[0].name : "N/A",
    genreTwo: data.genres.length > 1 ? data.genres[1].name : "N/A",
    rating: data.metacritic,
    slug: data.slug,
  };

  // console.log(data.genres);
  return (
    <Fragment>
      <Link
        to={`/game-detail/${data.slug}`}
        key={game.id}
        style={{ backgroundImage: "url(" + game.cardImage + ")" }}
        className={styles.container}
      >
        <img src="" alt="" />
        <div className={styles["card-content"]}>
          <div className={styles["card-content-top"]}>
            <span className={styles.genre}>
              {game.genreOne}, {game.genreTwo}
            </span>
            <h6 className={styles.rating}>{game.rating}</h6>
          </div>
          <div className={styles["card-content-bottom"]}>
            <h4 className={styles.title}>{game.name}</h4>
            <h6 className={styles.price}>$49.99</h6>
          </div>
        </div>
      </Link>
    </Fragment>
  );
}

export default SmallProdCard;
