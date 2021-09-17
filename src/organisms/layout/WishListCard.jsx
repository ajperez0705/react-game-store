import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PrimaryBtn from "../buttons/PrimaryBtn";

import styles from "./WishListCard.module.css";

// Redux
import { useDispatch } from "react-redux";
import { cartActions } from "../../components/store/cart-slice";
import { wishlistActions } from "../../components/store/wishlist-slice";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function WishListCard({ id, name, price, image, slug }) {
  const dispatch = useDispatch();

  // DB Lists
  const cart = useSelector((state) => state.cart.items);
  const library = useSelector((state) => state.library.items);

  // DB States
  const [inCart, setInCart] = useState(false);
  const [inLibrary, setInLibrary] = useState(false);

  useEffect(() => checkGameStatus());

  const listItem = {
    id: id,
    name: name,
    price: price,
    image: image,
    slug: slug,
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: listItem.id,
        name: listItem.name,
        price: listItem.price,
        image: listItem.image,
        slug: listItem.slug,
      })
    );
  };

  const checkGameStatus = () => {
    const curGameSlug = slug;

    cart.forEach((item) => {
      if (curGameSlug === item.slug) {
        setInCart(true);
      } else {
        setInCart(false);
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

  const removeFromWishListHandler = () => {
    dispatch(wishlistActions.removeFromList(listItem));
  };

  return (
    <Fragment>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles["left-panel"]}>
          <Link to={`/game-detail/${slug}`} key={id}>
            <h1 className={styles.title}>{name}</h1>
          </Link>
        </div>
        <div className={styles["right-panel"]}>
          <h1 className={styles.price}>${price}</h1>
          {inCart || inLibrary ? (
            <button disabled onClick={addToCartHandler} className="primary-btn">
              Add to Cart
            </button>
          ) : (
            <button onClick={addToCartHandler} className="primary-btn">
              Add to Cart
            </button>
          )}

          <button onClick={removeFromWishListHandler} className="secondary-btn">
            Remove
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default WishListCard;
