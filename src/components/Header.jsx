import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import style from "./Header.module.css";

import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../contexts/AuthContext";
import { cartActions } from "../components/store/cart-slice";
import { wishlistActions } from "../components/store/wishlist-slice";

function Header() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cart = useSelector((state) => state.cart);
  const [error, setError] = useState("");
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  const dispatch = useDispatch();

  async function handleLogout() {
    setError("");

    dispatch(cartActions.emptyCart(cart));
    dispatch(wishlistActions.resetList());
    try {
      await logout();
      history.push("./login");
    } catch {
      setError("Failed to logout");
    }
  }

  console.log(currentUser);

  return (
    <div className={style.header}>
      <div>
        <div className={style.logo}>
          Logo<span>.</span>
        </div>
      </div>
      <div className={style["user-btns"]}>
        <Link className={style["shopping-cart"]} to="/cart">
          {currentUser ? (
            <span>{`Welcome ${currentUser.displayName}`}</span>
          ) : (
            <span>Hello Guest!</span>
          )}

          <i className="fas fa-shopping-cart" />
          <span>{cartQuantity}</span>
        </Link>
        <i className="fas fa-user" />
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default Header;
