import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import PrimaryBtn from "../organisms/buttons/PrimaryBtn";

import { useSelector } from "react-redux";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  // const { currentUser } = useAuth();

  useEffect(() => {
    cartItems.length === 0 ? setDisabled(true) : setDisabled(false);
  }, [cartItems]);

  const continueShopping = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            slug={item.slug}
          />
        );
      })}
      <div className={styles["cart-totals"]}>
        <h1 className={styles.title}>Total Amount</h1>
        {cartItems.length === 0 ? (
          <h1 className={styles.price}>$0.00</h1>
        ) : (
          <h1 className={styles.price}>{totalAmount.toFixed(2)}</h1>
        )}
      </div>
      <div className={styles.ctas}>
        <button
          onClick={continueShopping}
          content="Checkout"
          className="primary-btn"
        >
          Continue Shopping
        </button>
        {disabled ? (
          <button
            onClick={(e) => history.push("/payment")}
            content="Checkout"
            className="primary-btn"
            disabled
          >
            Checkout
          </button>
        ) : (
          <button
            onClick={(e) => history.push("/payment")}
            className="primary-btn"
            content="Checkout"
          >
            Checkout
          </button>
        )}

        {/* <PrimaryBtn
          onClick={(e) => history.push("/payment")}
          content="Checkout"
          disabled={disabled}
        /> */}
      </div>
    </div>
  );
}

export default Cart;
