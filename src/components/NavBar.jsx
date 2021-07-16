import React from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div>
      <header className={styles.container}>
        <ul className={styles["main-nav"]}>
          <li>
            <i class="fas fa-home" />
            Home
          </li>
          <li>
            <i class="fas fa-search" />
            Search
          </li>
          <li>
            <i class="fas fa-heart" />
            Wish List
          </li>
          <li>
            <i class="fas fa-book" />
            My Library
          </li>
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
