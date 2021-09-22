import styles from "./NavBar.module.css";
import React from "react";
import { Link } from "react-router-dom";

function NintendoDropdownMenu() {
  function DropDownItem(props) {
    return <div className={styles["menu-item"]}>{props.children}</div>;
  }

  return (
    <div id={styles["nintendo-link"]} className={styles["nintendo-dropdown"]}>
      <DropDownItem>
        <Link
          to="/platform/nintendo-switch"
          param="nintendo-switch"
          className={styles["filter-link-dropdown"]}
        >
          Nintendo Switch
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platform/nintendo-3ds"
          param="nintendo-3ds"
          className={styles["filter-link-dropdown"]}
        >
          Nintendo 3DS
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platform/game-boy-advance"
          param="game-boy-advance"
          className={styles["filter-link-dropdown"]}
        >
          Gameboy Advance
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platform/wii"
          param="wii"
          className={styles["filter-link-dropdown"]}
        >
          Nintendo Wii
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platform/gamecube"
          param="gamecube"
          className={styles["filter-link-dropdown"]}
        >
          Nintendo GameCube
        </Link>
      </DropDownItem>
    </div>
  );
}

export default NintendoDropdownMenu;
