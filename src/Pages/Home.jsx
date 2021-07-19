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
    const data = await fetchGameList("/gamelist");
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
    const data = await fetchGameList("/realeaseDateFilter");

    let sortingNewReleases = [];

    data.results.forEach((game) => {
      let id = game.id;
      // let name = game.name;
      let month = game.released.slice(5, 7);
      let day = game.released.slice(8, 10);
      // if newReleases array.length > 2, loop through newreleases array, if game month is greater than newReleases month && month is !== to each other, filter out that newRelease, push current game and sort according to release date
      if (sortingNewReleases.length < 3) {
        for (let i = 0; i < sortingNewReleases.length; i++) {
          if (id === sortingNewReleases[i].id) {
            return;
          } else {
            sortingNewReleases.push(game);
          }
        }
      } else {
        sortingNewReleases.forEach((newRelease) => {
          // let newRelName = newRelease.name;
          let newRelId = newRelease.id;
          let newRelMonth = newRelease.released.slice(5, 7);
          let newRelDay = newRelease.released.slice(8, 10);

          if (id === newRelId) return;

          // Else if, months are ===, compare days
          if (
            month > newRelMonth ||
            (month === newRelMonth && day > newRelDay)
          ) {
            sortingNewReleases.push(game);
            sortingNewReleases = sortingNewReleases.filter(
              (gameToKeep) => gameToKeep.id !== newRelId
            );
          } else return;
        });
      }
    });
    sortingNewReleases.sort((a, b) =>
      a.released.slice(5, 7) > b.released.slice(5, 7) ? -1 : 1
    );
    setNewReleases(sortingNewReleases);
    console.log(newReleases);
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
