import React, { Fragment } from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";
import styles from "../layout/HeroProdCard.module.css";

// Redux
import { cartActions } from "../../components/store/cart-slice";
import { wishlistActions } from "../../components/store/wishlist-slice";
import { useDispatch, useSelector } from "react-redux";
import { errorUIActions } from "../../components/store/errorUI-slice";
import Notification from "../../components/Notification";

let screenShotLimit = [];
let garbage = [];

function GameDetailHero({ data, inCart }) {
  const cartItems = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.errorUI.notification);
  const errorUI = useSelector((state) => state.errorUI);
  const dispatch = useDispatch();

  const game = {
    id: data.id,
    name: data.name,
    cardImage: data.background_image,
    screenShots: data.short_screenshots,
    price: 50,
  };

  const addToCartHandler = () => {
    dispatch(
      errorUIActions.showNotification({
        status: "Pending",
        title: "Sending",
        message: "Sending Cart Data",
      })
    );

    dispatch(
      cartActions.addToCart({
        id: game.id,
        name: game.name,
        price: game.price,
        image: game.cardImage,
      })
    );

    dispatch(
      errorUIActions.showNotification({
        status: "Complete",
        title: "Send Complete",
        message: "Successfully sent data to cart",
      })
    );

    setTimeout(() => {
      dispatch(
        errorUIActions.resetNotification({
          notification: null,
        })
      );
    }, 3000);
  };

  const addToWishListHandler = () => {
    dispatch(
      errorUIActions.showNotification({
        status: "Pending",
        title: "Sending",
        message: "Sending Cart Data",
      })
    );

    dispatch(
      wishlistActions.addToWishList({
        id: game.id,
        name: game.name,
        image: game.cardImage,
        price: game.price,
      })
    );

    dispatch(
      errorUIActions.showNotification({
        status: "Complete",
        title: "Send Complete",
        message: "Successfully sent data to cart",
      })
    );

    setTimeout(() => {
      dispatch(
        errorUIActions.resetNotification({
          notification: null,
        })
      );
    }, 3000);
  };

  return (
    <Fragment>
      <div className={styles["main-container"]}>
        <div
          key={game.id}
          style={{ backgroundImage: `url(${game.cardImage})` }}
          className={styles.container}
        >
          <div className={styles["left-panel"]}>
            <div className={styles["user-check"]}>
              {inCart ? (
                <i className="fas fa-shopping-cart" />
              ) : (
                <h3>Not in cart</h3>
              )}
              <i className="fas fa-list-ol" />
              <i className="fas fa-book" />
            </div>
            <h1 className={styles.title}>{game.name}</h1>
            <div className={styles.ctas}>
              <PrimaryBtn
                className={styles.btn}
                content="Add to Cart"
                onClick={addToCartHandler}
              />
              <SecondaryBtn
                className={styles.btn}
                content="Add to Wishlist"
                onClick={addToWishListHandler}
              />
            </div>
          </div>
        </div>
        <div className={styles["screenshot-container"]}>
          {!game.screenShots ? (
            <h3>Loading</h3>
          ) : (
            game.screenShots.map((screenShot, index) => {
              if (index < 3) {
                return (
                  <img
                    key={screenShot.id}
                    className={styles["hero-screenshots"]}
                    src={screenShot.image}
                    alt=""
                  />
                );
              } else {
                return null;
              }
            })
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default GameDetailHero;
