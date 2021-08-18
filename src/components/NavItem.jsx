import styles from "./NavBar.module.css";
import React, { useState } from "react";

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={styles["nav-item"]}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className={styles["filter-link"]}>
        {props.content}
        {props.icon}
      </span>
      {/* <span className={styles["filter-link"]}></span> */}

      {open && props.children}
    </li>
  );
}

export default NavItem;
