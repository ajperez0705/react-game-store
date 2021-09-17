import React from "react";
import styles from "./CartItem.module.css";

// redux
import { useDispatch } from "react-redux";
import { cartActions } from "../components/store/cart-slice";
import { Link } from "react-router-dom";

function CartItem({ id, name, price, image, slug }) {
  const item = {
    id: id,
    name: name,
    price: price,
    image: image,
    slug: slug,
  };

  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeFromCart(item));
  };

  return (
    <div>
      <div id={id} className={styles.container}>
        <div className={styles["left-cart-item"]}>
          <img className={styles["cart-img"]} src={image} alt="" />
          <Link to={`/game-detail/${slug}`} key={id}>
            <h1 className={styles.title}>{name}</h1>
          </Link>
        </div>
        <div className={styles["right-cart-item"]}>
          <h4 className={styles.price}>${price}</h4>
          <button
            onClick={removeFromCartHandler}
            className={styles["remove-btn"]}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
