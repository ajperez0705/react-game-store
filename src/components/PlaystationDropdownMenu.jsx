import styles from "./NavBar.module.css";
import React from "react";
import { Link } from "react-router-dom";

function PlaystationDropdownMenu() {
  function DropDownItem(props) {
    return <div className={styles["menu-item"]}>{props.children}</div>;
  }

  return (
    <div className={styles["playstation-dropdown"]}>
      <DropDownItem>
        <Link
          to="/platforms/playstation-5"
          param="playstation-5"
          className={styles["filter-link-dropdown"]}
        >
          Playstation 5
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platforms/playstation-4"
          param="playstation-4"
          className={styles["filter-link-dropdown"]}
        >
          Playstation 4
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platforms/playstation-3"
          param="playstation-3"
          className={styles["filter-link-dropdown"]}
        >
          Playstation 3
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platforms/playstation-2"
          param="playstation-2"
          className={styles["filter-link-dropdown"]}
        >
          Playstation 2
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platforms/playstation-1"
          param="playstation-1"
          className={styles["filter-link-dropdown"]}
        >
          Playstation 1
        </Link>
      </DropDownItem>
    </div>
  );
}

export default PlaystationDropdownMenu;
