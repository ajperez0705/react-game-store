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
  const [featuredGame, setFeaturedGame] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Call function
  // Fetch game list
  // Loop through data.results
  // Save highest result with highest review count
  // data.results.find() =>

  useEffect(() => {
    setIsLoading(true);

    async function init() {
      await fetchFeaturedGame();
      await fetchNewReleases();

      setIsLoading(false);
    }
    init();
  }, []);

  const fetchFeaturedGame = async () => {
    const data = await fetchGameList();
    let featGame = {
      rating: 0,
    };
    data.results.map((game) => {
      if (game.rating > featGame.rating) {
        featGame = game;
      }
      return featGame;
    });
    setFeaturedGame(featGame);
  };

  const fetchNewReleases = async () => {
    const data = await fetchGameList();

    data.results.map((game) => {
      // Check if year is 2020 or greater, push game into newRelease state
      let year = game.released.slice(0, 4);
      console.log(year);

      // Check newReleases state, if length > 2, slice everything !0-2

      // return year;
    });
  };

  return (
    <div>
      <section className={styles.hero}>
        <h4 className={styles["section-title"]}>Featured</h4>
        {/* if is loading true, render loading, else render hero */}
        {isLoading ? <div>Loading</div> : <HeroProdCard data={featuredGame} />}
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
