import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import style from "./Header.module.css";

import { useSelector } from "react-redux";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const [error, setError] = useState("");
  const history = useHistory();
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("./login");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <div className={style.header}>
      <div>
        <div className={style.logo}>
          Logo<span>.</span>
        </div>
      </div>
      <div className={style["user-btns"]}>
        <Link className={style["shopping-cart"]} to="/cart">
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
