import React, { useState, useEffect } from "react";
import GameDetailContent from "../organisms/layout/GameDetailContent";
import MediumProdCard from "../organisms/layout/MediumProdCard";

import { useParams } from "react-router-dom";

import styles from "./GameDetail.module.css";
import { slugSearch } from "../helpers/fetch-functions";

import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function GameDetail() {
  const cartItems = useSelector((state) => state.cart.items);

  const [isLoading, setIsLoading] = useState(false);
  const [game, setGame] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    setIsLoading(true);

    async function init() {
      await fetchClickedGame();
      setIsLoading(false);
    }
    init();
  }, []);

  const fetchClickedGame = async () => {
    const initData = await slugSearch(`http://localhost:3001/game/${slug}`);
    const finalData = initData.results[0];

    setGame(finalData);
  };

  return (
    <div>
      <section className={styles["game-info"]}>
        {isLoading ? <div>Loading</div> : <GameDetailContent data={game} />}
      </section>
      <section className={styles["view-more"]}>
        <h2 className={styles["view-more-title"]}>
          Checkout More Games Like This One
        </h2>
        <div className={styles["card-container"]}>
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          })}
          {/* <MediumProdCard />
          <MediumProdCard />
          <MediumProdCard /> */}
        </div>
      </section>
    </div>
  );
}

export default GameDetail;
