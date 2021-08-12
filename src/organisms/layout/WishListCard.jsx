import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";

import styles from "./WishListCard.module.css";

// Redux
import { useDispatch } from "react-redux";
import { cartActions } from "../../components/store/cart-slice";
import { wishlistActions } from "../../components/store/wishlist-slice";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function WishListCard({ id, name, price, image, slug }) {
  const dispatch = useDispatch();

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
          <PrimaryBtn onClick={addToCartHandler} content="Add to Cart" />
          <button
            onClick={removeFromWishListHandler}
            className={styles["remove-btn"]}
          >
            Remove
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default WishListCard;
