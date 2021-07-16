import React from "react";
import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.header}>
      <div>
        <div className={style.logo}>
          Logo<span>.</span>
        </div>
      </div>
      <div className={style["user-btns"]}>
        <i className="fas fa-shopping-cart" />
        <i className="fas fa-user" />
      </div>
    </div>
  );
}

export default Header;
