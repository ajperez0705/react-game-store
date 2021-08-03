import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";

import styles from "./WishListCard.module.css";

// Redux
import { useDispatch } from "react-redux";
import { cartActions } from "../../components/store/cart-slice";
import { wishlistActions } from "../../components/store/wishlist-slice";

function WishListCard({ id, name, price, image }) {
  const dispatch = useDispatch();

  const listItem = {
    id: id,
    name: name,
    price: price,
    image: image,
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: listItem.id,
        name: listItem.name,
        price: listItem.price,
        image: listItem.image,
      })
    );
  };

  const removeFromWishListHandler = () => {
    dispatch(wishlistActions.removeFromList(listItem));
  };

  return (
    <div>
      <div
        id={id}
        style={{ backgroundImage: `url(${image})` }}
        className={styles.container}
      >
        <div className={styles["left-panel"]}>
          <h1 className={styles.title}>{name}</h1>
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
    </div>
  );
}

export default WishListCard;
