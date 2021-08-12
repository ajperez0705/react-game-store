import React, { useState, useEffect } from "react";
import GameDetailContent from "../organisms/layout/GameDetailContent";
import MediumProdCard from "../organisms/layout/MediumProdCard";

import { useParams, useLocation, Link } from "react-router-dom";

import styles from "./GameDetail.module.css";
import { searchDB, slugSearch } from "../helpers/fetch-functions";

// Redux
import { errorUIActions } from "../components/store/errorUI-slice";
import Notification from "../components/Notification";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
// import { errorUIActions } from "../../components/store/errorUI-slice";
// import Notification from "../../components/Notification";
let isInitial = true;

function GameDetail() {
  const url = window.location.pathname;

  const dispatch = useDispatch();
  const location = useLocation();
  // const { twitchAccess } = location.state;
  const cartItems = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.errorUI.notification);

  // const errorUI = useSelector((state) => state.errorUI);

  const [isLoading, setIsLoading] = useState(false);
  const [game, setGame] = useState([]);
  const [similarGames, setSimilarGames] = useState([]);
  const [inCart, setInCart] = useState(false);
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
      try {
        await fetchClickedGame();
        // await fetchSimilarGames();

        setIsLoading(false);
        dispatch(
          errorUIActions.showNotification({
            status: "Complete",
            title: "Completed",
            message: "Completed loading from database",
          })
        );

        setTimeout(() => {
          dispatch(
            errorUIActions.resetNotification({
              notification: null,
            })
          );
        }, 3000);
      } catch (err) {
        console.log(err);
      }
    }
    init();
    // checkGameInCart(cartItems);
  }, [url]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    async function initSimilarSearch() {
      setIsLoading(true);
      await fetchSimilarGames(game);
      setIsLoading(false);
    }

    initSimilarSearch();
  }, [game]);

  const fetchClickedGame = async () => {
    const initData = await slugSearch(`http://localhost:3001/game/${slug}`);
    const finalData = initData.results[0];

    setGame(finalData);
    console.log(game);
  };

  const fetchSimilarGames = async (game) => {
    const genre = game.genres[0].name.toLowerCase();
    const initData = await searchDB(`http://localhost:3001/gamelist/${genre}`);

    // Array Randomizer - need to get a return value to access the result
    for (let i = initData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = initData[i];
      initData[i] = initData[j];
      initData[j] = temp;
      console.log(temp);
    }

    let filteredSimilarData = [];

    initData.forEach((game) => {
      if (filteredSimilarData.length < 3) {
        filteredSimilarData.push(game);
        // setSimilarGames((prevState) => [...prevState, game]);
      } else if (filteredSimilarData.length > 3) return;
    });
    setSimilarGames(filteredSimilarData);
  };
  // cartItems.forEach((cartGame) => {
  //   let gameCartName = cartGame.name;
  //   if (game.name === gameCartName) {
  //     console.log("called");

  //     setInCart(true);
  //     return;
  //   } else return;
  // });

  // const checkGameInCart = (cartItems) => {
  // };

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
        <GameDetailContent
          // twitchAccess={twitchAccess}
          inCart={inCart}
          data={game}
        />
      </section>
      <section className={styles["view-more"]}>
        <h2 className={styles["view-more-title"]}>
          Checkout More Games Like This One
        </h2>
        <div className={styles["card-container"]}>
          {!isLoading &&
            similarGames.map((item) => {
              return <MediumProdCard data={item} />;
            })}
        </div>
      </section>
    </div>
  );
}

export default GameDetail;
