// Styling
import styles from "./NavBar.module.css";

// Hooks
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <header className={styles.container}>
        <ul className={styles["main-nav"]}>
          <NavLink
            activeClassName={styles.active}
            className={styles["nav-link"]}
            to="/home"
          >
            <i className="fas fa-home" />
            Home
          </NavLink>
          <NavLink
            activeClassName={styles.active}
            className={styles["nav-link"]}
            to="/search"
          >
            <i className="fas fa-search" />
            Search
          </NavLink>
          <NavLink
            activeClassName={styles.active}
            className={styles["nav-link"]}
            to="/wish-list"
          >
            <i className="fas fa-heart" />
            Wish List
          </NavLink>
          <NavLink
            activeClassName={styles.active}
            className={styles["nav-link"]}
            to="/my-library"
          >
            <i className="fas fa-book" />
            My Library
          </NavLink>
        </ul>
        <div className={styles["filter-menu"]}>
          <h1 className={styles["filter-menu-title"]}>Filters</h1>
          <h2 className={styles["filter-title"]}>Genre</h2>
          <ul className={styles["filter-list"]}>
            <li className={styles["filter-link"]}>Adventure</li>
            <li className={styles["filter-link"]}>RPG</li>
            <li className={styles["filter-link"]}>Shooter</li>
            <li className={styles["filter-link"]}>Puzzle</li>
            <li className={styles["filter-link"]}>Racing</li>
            <li className={styles["filter-link"]}>Sports</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
