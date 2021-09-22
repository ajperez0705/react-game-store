import styles from "./NavBar.module.css";
import React from "react";
import { Link } from "react-router-dom";

function PlaystationDropdownMenu() {
  function DropDownItem(props) {
    return <div className={styles["menu-item"]}>{props.children}</div>;
  }

  return (
    <div
      id={styles["playstation-link"]}
      className={styles["playstation-dropdown"]}
    >
      <DropDownItem>
        <Link
          to="/platform/playstation5"
          param="playstation5"
          className={styles["filter-link-dropdown"]}
        >
          Playstation 5
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platform/playstation4"
          param="playstation4"
          className={styles["filter-link-dropdown"]}
        >
          Playstation 4
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platform/playstation3"
          param="playstation3"
          className={styles["filter-link-dropdown"]}
        >
          Playstation 3
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platform/playstation2"
          param="playstation2"
          className={styles["filter-link-dropdown"]}
        >
          Playstation 2
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platform/playstation1"
          param="playstation1"
          className={styles["filter-link-dropdown"]}
        >
          Playstation 1
        </Link>
      </DropDownItem>
    </div>
  );
}

export default PlaystationDropdownMenu;
