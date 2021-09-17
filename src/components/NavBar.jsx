// Styling
import styles from "./NavBar.module.css";

// Hooks
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavItem from "./NavItem";
import NintendoDropdownMenu from "./NintendoDropdownMenu";
import PlaystationDropdownMenu from "./PlaystationDropdownMenu";
import XboxDropdownMenu from "./XboxDropdownMenu";

function NavBar() {
  const wishlistQuantity = useSelector((state) => state.wishlist.totalQuantity);

  return (
    <div>
      <header className={styles.container}>
        <ul className={styles["main-nav"]}>
          <NavLink
            exact
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
            <NavItem
              content="Xbox"
              icon={
                <i style={{ marginLeft: 8 }} className="fas fa-caret-right"></i>
              }
            >
              <XboxDropdownMenu />
            </NavItem>

            <NavItem
              content="Playstation"
              icon={
                <i style={{ marginLeft: 8 }} className="fas fa-caret-right"></i>
              }
            >
              <PlaystationDropdownMenu />
            </NavItem>

            <NavItem
              content="Nintendo"
              icon={
                <i style={{ marginLeft: 8 }} className="fas fa-caret-right"></i>
              }
            >
              <NintendoDropdownMenu />
            </NavItem>
          </ul>
          {/* <h2 className={styles["filter-title"]}>Genre</h2>
          <ul className={styles["filter-list"]}>
            <Link className={styles["filter-link"]}>Adventure</Link>
            <Link className={styles["filter-link"]}>RPG</Link>
            <Link className={styles["filter-link"]}>Shooter</Link>
            <Link className={styles["filter-link"]}>Puzzle</Link>
            <Link className={styles["filter-link"]}>Racing</Link>
            <Link className={styles["filter-link"]}>Sports</Link>
          </ul> */}
        </div>
      </header>
    </div>
  );
}

export default NavBar;
