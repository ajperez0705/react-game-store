import styles from "./NavBar.module.css";
import React from "react";
import { Link } from "react-router-dom";

function NintendoDropdownMenu() {
  function DropDownItem(props) {
    return <div className={styles["menu-item"]}>{props.children}</div>;
  }

  return (
    <div className={styles["nintendo-dropdown"]}>
      <DropDownItem>
        <Link
          to="/platforms/nintendo-switch"
          param="nintendo-switch"
          className={styles["filter-link-dropdown"]}
        >
          Nintendo Switch
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platforms/nintendo-3ds"
          param="nintendo-3ds"
          className={styles["filter-link-dropdown"]}
        >
          Nintendo 3DS
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platforms/gameboy-advance"
          param="gameboy-advance"
          className={styles["filter-link-dropdown"]}
        >
          Gameboy Advance
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platforms/nintendo-wii"
          param="nintendo-wii"
          className={styles["filter-link-dropdown"]}
        >
          Nintendo Wii
        </Link>
      </DropDownItem>

      <DropDownItem>
        <Link
          to="/platforms/nintendo-gamecube"
          param="nintendo-gamecube"
          className={styles["filter-link-dropdown"]}
        >
          Nintendo GameCube
        </Link>
      </DropDownItem>
    </div>
  );
}

export default NintendoDropdownMenu;
