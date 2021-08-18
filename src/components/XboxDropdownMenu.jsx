import styles from "./NavBar.module.css";
import React from "react";
import { Link } from "react-router-dom";

function XboxDropdownMenu() {
  function DropDownItem(props) {
    return <div className={styles["menu-item"]}>{props.children}</div>;
  }

  return (
    <div className={styles["xbox-dropdown"]}>
      <DropDownItem>
        <Link
          to="/platforms/xbox-one"
          param="xbox-one"
          className={styles["filter-link-dropdown"]}
        >
          Xbox One
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platforms/xbox-360"
          param="xbox-360"
          className={styles["filter-link-dropdown"]}
        >
          Xbox 360
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platforms/xbox"
          param="xbox"
          className={styles["filter-link-dropdown"]}
        >
          Xbox
        </Link>
      </DropDownItem>
    </div>
  );
}

export default XboxDropdownMenu;
