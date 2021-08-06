import React, { useState, useEffect } from "react";
import GameDetailContent from "../organisms/layout/GameDetailContent";
import MediumProdCard from "../organisms/layout/MediumProdCard";

import { useParams } from "react-router-dom";

import styles from "./GameDetail.module.css";
import { slugSearch } from "../helpers/fetch-functions";

// Redux
import { errorUIActions } from "../components/store/errorUI-slice";
import Notification from "../components/Notification";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
// import { errorUIActions } from "../../components/store/errorUI-slice";
// import Notification from "../../components/Notification";

function GameDetail() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.errorUI.notification);
  let gameInCart = false;

  const errorUI = useSelector((state) => state.errorUI);

  const [isLoading, setIsLoading] = useState(false);
  const [game, setGame] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    setIsLoading(true);

    dispatch(
      errorUIActions.showNotification({
        status: "Loading",
        title: "Loading",
        message: "Loading from database",
      })
    );

    async function init() {
      await fetchClickedGame();
      setIsLoading(false);
      dispatch(
        errorUIActions.showNotification({
          status: "Complete",
          title: "Completed",
          message: "Completed loading from database",
        })
      );

      checkGameInCart();

      setTimeout(() => {
        dispatch(
          errorUIActions.resetNotification({
            notification: null,
          })
        );
      }, 3000);
    }
    init();
  }, []);

  const fetchClickedGame = async () => {
    const initData = await slugSearch(`http://localhost:3001/game/${slug}`);
    const finalData = initData.results[0];

    setGame(finalData);
  };

  const checkGameInCart = () => {
    cartItems.forEach((cartGame) => {
      let gameCartName = cartGame.name;
      if (game.name === gameCartName) {
        console.log(game.name, gameCartName);

        gameInCart = true;
        return;
      } else return;
    });
    console.log(gameInCart);
  };

  return (
    <div>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <section className={styles["game-info"]}>
        <GameDetailContent inCart={gameInCart} data={game} />
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
