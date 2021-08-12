import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import styles from "./Payment.module.css";
import PrimaryBtn from "../organisms/buttons/PrimaryBtn";
import { purchaseDB } from "../helpers/fetch-functions";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../contexts/AuthContext";
import { cartActions } from "../components/store/cart-slice";
import { libraryActions } from "../components/store/library-slice";

import { useHistory } from "react-router-dom";

// Stripe
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
  // Redux
  const cart = useSelector((state) => state.cart);
  const library = useSelector((state) => state.library);
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  // Stripe
  const stripe = useStripe();
  const elements = useElements();

  // State
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const { currentUser } = useAuth();

  // Router
  const history = useHistory();

  useEffect(() => {
    setIsEmpty(false);

    const getClientSecret = async () => {
      const amount = totalAmount * 100;
      const data = await purchaseDB(
        `http://localhost:3001/payments/create?total=${amount}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setClientSecret(data.clientSecret);

      // return () => {
      //   setIsEmpty(true);
      // };
    };

    getClientSecret();
  }, [totalAmount]);

  const submitHandler = async (e) => {
    e.preventDefault();

    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(false);
        setProcessing(false);
        console.log(cart, cartItems);
        dispatch(libraryActions.addToLibrary(cart));
        console.log(library);
        history.replace("/my-library");
        dispatch(cartActions.emptyCart(cart));
      });

    setIsEmpty(true);
  };

  const inputHandler = (e) => {
    // Listen for changed in card, and listen/display for errors
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div>
      <div className={styles["payment"]}>
        <div className={styles["payment__container"]}>
          <div className={styles["payment__section"]}>
            <div className={styles["payment__title"]}>
              <h3>Delivery Address</h3>
            </div>
            <div className={styles["payment__address"]}>
              <p>{currentUser?.email}</p>
              <p>Street</p>
              <p>City</p>
            </div>
          </div>

          <div className={styles["payment__section"]}>
            <div className={styles["payment__title"]}>
              <h3>Review Items and Delivery</h3>
            </div>
            <div className={styles["payment__items"]}>
              {isEmpty ? (
                <h1>Payment processing</h1>
              ) : (
                cartItems.map((item) => {
                  return (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                    />
                  );
                })
              )}
            </div>
          </div>

          <div className={styles["payment__section"]}>
            <div className={styles["payment__title"]}>
              <h3>Payment Method</h3>
            </div>
            <div className={styles["payment__details"]}>
              {/* Stripe magic */}

              <form onSubmit={submitHandler}>
                <CardElement onChange={inputHandler} />
                <div className={styles["payment__priceContainer"]}>
                  <h1>Total Amount: ${totalAmount}</h1>
                  <button
                    className="primary-btn"
                    disabled={processing || disabled || succeeded}
                  >
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {/* Errors */}
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
