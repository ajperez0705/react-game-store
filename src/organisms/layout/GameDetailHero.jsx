import React, { Fragment } from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";
import styles from "../layout/HeroProdCard.module.css";

// Redux
import { cartActions } from "../../components/store/cart-slice";
import { wishlistActions } from "../../components/store/wishlist-slice";
import { useDispatch, useSelector } from "react-redux";
import { errorUIActions } from "../../components/store/errorUI-slice";
// import Notification from "../../components/Notification";

function GameDetailHero({ data, inCart, inWishlist, inLibrary }) {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.library.items);

  const game = {
    id: data.id,
    name: data.name,
    cardImage: data.background_image,
    screenShots: data.short_screenshots,
    slug: data.slug,
    price: 50,
  };

  const addToCartHandler = () => {
    // Guard clause
    library.forEach((item) => {
      if (item.name === data.name) return;
    });

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
        slug: game.slug,
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
        slug: game.slug,
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
              {inCart === true ? (
                <i className="fas fa-shopping-cart" />
              ) : (
                <i
                  className="fas fa-shopping-cart"
                  style={{ opacity: 0.5, color: "black" }}
                />
              )}
              {inWishlist === true ? (
                <i className="fas fa-list-ol" />
              ) : (
                <i
                  className="fas fa-list-ol"
                  style={{ opacity: 0.5, color: "black" }}
                />
              )}
              {inLibrary === true ? (
                <i className="fas fa-book" />
              ) : (
                <i
                  className="fas fa-book"
                  style={{ opacity: 0.5, color: "black" }}
                />
              )}
            </div>
            <h1 className={styles.title}>{game.name}</h1>
            <div className={styles.ctas}>
              {inCart || inLibrary === true ? (
                <button
                  style={{ marginRight: 16 }}
                  className="primary-btn"
                  content="Add to Cart"
                  onClick={addToCartHandler}
                  disabled
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  style={{ marginRight: 16 }}
                  className="primary-btn"
                  content="Add to Cart"
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </button>
              )}

              {inWishlist === true ? (
                <button
                  className="primary-btn"
                  content="Add to Wishlist"
                  onClick={addToCartHandler}
                  disabled
                >
                  Add to Wishlist
                </button>
              ) : (
                <button
                  className="primary-btn"
                  content="Add to Wishlist"
                  onClick={addToWishListHandler}
                >
                  Add to Wishlist
                </button>
              )}
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
