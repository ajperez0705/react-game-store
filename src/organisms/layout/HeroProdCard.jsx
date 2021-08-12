import React, { Fragment } from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";
import styles from "../layout/HeroProdCard.module.css";

// Redux
import { cartActions } from "../../components/store/cart-slice";
import { wishlistActions } from "../../components/store/wishlist-slice";
import { useDispatch, useSelector } from "react-redux";

let screenShotLimit = [];
let garbage = [];

function HeroProdCard({ data, twitchAccess }) {
  const cartItems = useSelector((state) => state.cart.items);
  const libraryItems = useSelector((state) => state.library.items);

  const dispatch = useDispatch();

  const game = {
    id: data.id,
    name: data.name,
    cardImage: data.background_image,
    screenShots: data.short_screenshots,
    slug: data.slug,
    price: 50,
  };

  const addToCartHandler = async () => {
    const existingLibraryItem = await libraryItems.find(
      (item) => item.id === game.id
    );
    console.log("added");
    if (existingLibraryItem) {
      return;
    } else {
      dispatch(
        cartActions.addToCart({
          id: game.id,
          name: game.name,
          price: game.price,
          image: game.cardImage,
          slug: game.slug,
        })
      );
    }
  };

  const addToWishListHandler = () => {
    dispatch(
      wishlistActions.addToWishList({
        id: game.id,
        name: game.name,
        image: game.cardImage,
        price: game.price,
        slug: game.slug,
      })
    );
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

export default HeroProdCard;
