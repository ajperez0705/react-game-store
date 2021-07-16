import React from "react";
import HeroProdCard from "../organisms/layout/HeroProdCard";
import MediumProdCard from "../organisms/layout/MediumProdCard";
import SmallProdCard from "../organisms/layout/SmallProdCard";

import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <h4 className={styles["section-title"]}>Featured</h4>
        <HeroProdCard />
      </section>
      <section className={styles.medium}>
        <h4 className={styles["section-title"]}>New Releases</h4>
        <div className={styles["card-row"]}>
          <MediumProdCard />
          <MediumProdCard />
          <MediumProdCard />
        </div>
      </section>
      <section className={styles.small}>
        <h4 className={styles["section-title"]}>Best Sellers</h4>
        <div className={styles["card-row"]}>
          <SmallProdCard />
          <SmallProdCard />
          <SmallProdCard />
          <SmallProdCard />
        </div>
      </section>
    </div>
  );
}

export default Home;
