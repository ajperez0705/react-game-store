// Styling
import styles from "./NavBar.module.css";

// Hooks
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const [open, setOpen] = useState(false);
  const wishlistQuantity = useSelector((state) => state.wishlist.totalQuantity);

  return (
    <div>
      <header className={styles.container}>
        <ul className={styles["main-nav"]}>
          <NavLink
            activeClassName={styles.active}
            className={styles["nav-link"]}
            to="/"
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
            <span className={styles["wishlist-quantity"]}>
              {wishlistQuantity}
            </span>
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
          <h2 className={styles["filter-title"]}>Platform</h2>
          <ul className={styles["filter-list"]}>
            <Link
              to="/platforms/pc"
              param="pc"
              className={styles["filter-link"]}
            >
              PC
            </Link>
            <Link
              to="/platforms/xbox-one"
              param="xbox-one"
              className={styles["filter-link"]}
            >
              Xbox
            </Link>
            <Link
              to="/platforms/playstation-5"
              param="playstation-5"
              className={styles["filter-link"]}
            >
              Playstation
            </Link>
            <Link
              to="/platforms/nintendo-switch"
              param="nintendo-switch"
              className={styles["filter-link"]}
            >
              Nintendo
            </Link>
          </ul>
          <h2 className={styles["filter-title"]}>Genre</h2>
          <ul className={styles["filter-list"]}>
            <Link className={styles["filter-link"]}>Adventure</Link>
            <Link className={styles["filter-link"]}>RPG</Link>
            <Link className={styles["filter-link"]}>Shooter</Link>
            <Link className={styles["filter-link"]}>Puzzle</Link>
            <Link className={styles["filter-link"]}>Racing</Link>
            <Link className={styles["filter-link"]}>Sports</Link>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
