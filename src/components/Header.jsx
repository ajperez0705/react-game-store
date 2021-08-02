import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Header.module.css";

import { useSelector } from "react-redux";

function Header() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

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
      </div>
    </div>
  );
}

export default Header;
