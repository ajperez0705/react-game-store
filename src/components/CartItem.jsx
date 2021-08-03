import React from "react";
import styles from "./CartItem.module.css";

// redux
import { useDispatch } from "react-redux";
import { cartActions } from "../components/store/cart-slice";

function CartItem({ id, name, price, image }) {
  const item = {
    id: id,
    name: name,
    price: price,
    image: image,
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
          <h2 className={styles.title}>{name}</h2>
        </div>
        <div className={styles["right-cart-item"]}>
          <h4 className={styles.price}>{price}</h4>
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
