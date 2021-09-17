import React, { useState, useEffect } from "react";
import GameDetailContent from "../organisms/layout/GameDetailContent";
import MediumProdCard from "../organisms/layout/MediumProdCard";

import { useParams, useLocation } from "react-router-dom";

import styles from "./GameDetail.module.css";
import { searchDB, slugSearch, gameSummary } from "../helpers/fetch-functions";

// Redux
import { errorUIActions } from "../components/store/errorUI-slice";
import Notification from "../components/Notification";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../organisms/ui-components/LoadingSpinner";
// import { errorUIActions } from "../../components/store/errorUI-slice";
// import Notification from "../../components/Notification";
let isInitial = true;

function GameDetail() {
  const url = window.location.pathname;

  const dispatch = useDispatch();
  // const { twitchAccess } = location.state;
  const notification = useSelector((state) => state.errorUI.notification);

  // const errorUI = useSelector((state) => state.errorUI);

  const [isLoading, setIsLoading] = useState(false);
  const [game, setGame] = useState([]);
  const [similarGames, setSimilarGames] = useState([]);
  const [summary, setSummary] = useState(undefined);
  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  const [inLibrary, setInLibrary] = useState(false);
  const { slug } = useParams();

  const cart = useSelector((state) => state.cart.items);
  const wishlist = useSelector((state) => state.wishlist.items);
  const library = useSelector((state) => state.library.items);

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);

    dispatch(
      errorUIActions.showNotification({
        status: "Loading",
        title: "Loading",
        message: "Loading from database",
      })
    );

    // On load
    async function init() {
      try {
        await fetchClickedGame(abortController);
        // This checks status on Init
        checkGameStatus();

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
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          console.log("just another error");
        }
      }
    }
    init();

    return () => {
      abortController.abort();
    };
    // checkGameInCart(cartItems);
  }, [url, slug]);

  // Skips init, runs when the game state changes
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    async function initSimilarSearch() {
      setIsLoading(true);
      await fetchGameSummary();
      await fetchSimilarGames();
      setIsLoading(false);
    }

    initSimilarSearch();
  }, [game]);

  // This useEffect runs on every render
  useEffect(() => checkGameStatus());

  // This one runs whenever the status is updated
  useEffect(() => {
    checkGameStatus();
  }, [cart, wishlist, library]);

  // Checks if the current game already exists in one of the databases
  const checkGameStatus = () => {
    const curGameSlug = game.slug;

    cart.forEach((item) => {
      if (curGameSlug === item.slug) {
        setInCart(true);
      } else {
        setInCart(false);
      }
    });

    wishlist.forEach((item) => {
      if (curGameSlug === item.slug) {
        setInWishlist(true);
      } else {
        setInWishlist(false);
      }
    });

    library.forEach((item) => {
      if (curGameSlug === item.slug) {
        setInLibrary(true);
      } else {
        setInLibrary(false);
      }
    });
  };

  const fetchClickedGame = async (abortController) => {
    const initData = await slugSearch(
      `http://localhost:3001/game/${slug}`,
      abortController
    );
    const finalData = initData.results[0];

    setGame(finalData);
    console.log(game);
  };

  const fetchSimilarGames = async () => {
    try {
      const genre = game.genres[0].name.toLowerCase();
      const initData = await searchDB(
        `http://localhost:3001/gamelist/${genre}`
      );

      // Array Randomizer - need to get a return value to access the result
      for (let i = initData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = initData[i];
        initData[i] = initData[j];
        initData[j] = temp;
      }

      let filteredSimilarData = [];

      initData.forEach((game) => {
        if (filteredSimilarData.length < 3) {
          filteredSimilarData.push(game);
          // setSimilarGames((prevState) => [...prevState, game]);
        } else if (filteredSimilarData.length > 3) return;
      });
      setSimilarGames(filteredSimilarData);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchGameSummary = async () => {
    try {
      const bodyData = "fields *; where name =";
      const gameData = await gameSummary(
        `http://localhost:3001/game/summary?gameName=${game.name}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: bodyData,
        }
      );

      console.log(gameData);

      // Loop through an array of objects
      let correctObj;
      gameData.forEach((obj) => {
        // At each object, if that object contains "summary", return that array
        if (obj.summary) correctObj = obj;
      });
      setSummary(correctObj.summary);
    } catch {
      console.log("Error in game detail content component");
    }
  };

  return (
    <div className={styles["container"]}>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <section className={styles["game-info"]}>
            <GameDetailContent
              // twitchAccess={twitchAccess}
              gameSummary={summary}
              inCart={inCart}
              inWishlist={inWishlist}
              inLibrary={inLibrary}
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
                  return <MediumProdCard key={item.id} data={item} />;
                })}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default GameDetail;
