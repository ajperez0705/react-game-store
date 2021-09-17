import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import style from "./Header.module.css";
import "../App.css";

import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../contexts/AuthContext";
import { cartActions } from "../components/store/cart-slice";
import { wishlistActions } from "../components/store/wishlist-slice";

function Header() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cart = useSelector((state) => state.cart);
  // const [error, setError] = useState("");
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  const dispatch = useDispatch();

  async function handleLogout() {
    dispatch(cartActions.emptyCart(cart));
    dispatch(wishlistActions.resetList());
    try {
      await logout();
      history.push("./login");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={style.header}>
      <div>
        <div className={style.logo}>
          Game<span className={style["logo-span"]}>Hub</span>
        </div>
      </div>
      <div className={style["user-btns"]}>
        <Link className={style["shopping-cart"]} to="/cart">
          {currentUser ? (
            <span
              className={style["welcome-message"]}
            >{`Welcome ${currentUser.displayName}`}</span>
          ) : (
            <span className={style["welcome-message"]}>Hello Guest!</span>
          )}

          <i className="fas fa-shopping-cart" />
          <span className={style["cart-quantity"]} style={{ marginLeft: 8 }}>
            {cartQuantity}
          </span>
        </Link>
        <button className="primary-btn" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Header;
