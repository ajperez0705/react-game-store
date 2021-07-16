import React from "react";
import "../layout/NavBar.module.css";

function NavBar() {
  return (
    <div>
      <header>
        <ul>
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
      </header>
    </div>
  );
}

export default NavBar;
