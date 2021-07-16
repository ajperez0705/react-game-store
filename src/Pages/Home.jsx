// Hooks
import React, { useEffect, useState } from "react";

// Components
import HeroProdCard from "../organisms/layout/HeroProdCard";
import MediumProdCard from "../organisms/layout/MediumProdCard";
import SmallProdCard from "../organisms/layout/SmallProdCard";

// Styling
import styles from "./Home.module.css";

// Helpers
import { fetchGameList } from "../helpers/fetch-functions";

function Home() {
  const [featuredGame, setFeaturedGame] = useState();
  const [newReleases, setNewReleases] = useState([{}]);
  const [bestSellers, setBestSellers] = useState([{}]);

  // Call function
  // Fetch game list
  // Loop through data.results
  // Save highest result with highest review count
  // data.results.find() =>

  useEffect(() => {
    fetchFeaturedGame();
  }, []);

  const fetchFeaturedGame = async () => {
    const data = await fetchGameList();
    let featuredGame = {
      id: null,
      name: "",
      rating: 0,
    };
    data.results.map((game) => {
      if (game.rating > featuredGame.rating) {
        featuredGame = game;
      }
      return featuredGame;
    });
    setFeaturedGame(featuredGame);
  };

  return (
    <div>
      <section className={styles.hero}>
        <h4 className={styles["section-title"]}>Featured</h4>
        <HeroProdCard data={featuredGame}/>
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
