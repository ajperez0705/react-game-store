import React from "react";
import GameDetailContent from "../organisms/layout/GameDetailContent";
import MediumProdCard from "../organisms/layout/MediumProdCard";

import { useParams } from "react-router-dom";

import styles from "./GameDetail.module.css";

function GameDetail() {
  const params = useParams();

  return (
    <div>
      <section className={styles["game-info"]}>
        <GameDetailContent title={params.gameName} />
      </section>
      <section className={styles["view-more"]}>
        <h2 className={styles["view-more-title"]}>
          Checkout More Games Like This One
        </h2>
        <div className={styles["card-container"]}>
          <MediumProdCard />
          <MediumProdCard />
          <MediumProdCard />
        </div>
      </section>
    </div>
  );
}

export default GameDetail;
