import React from "react";
import GameDetailContent from "../organisms/layout/GameDetailContent";
import HeroProdCard from "../organisms/layout/HeroProdCard";
import MediumProdCard from "../organisms/layout/MediumProdCard";

import styles from "./GameDetail.module.css";

function GameDetail() {
  return (
    <div>
      <section className={styles.hero}>
        <HeroProdCard />
      </section>
      <section className={styles["game-info"]}>
        <GameDetailContent />
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
