import React from "react";

import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div>
      <form action="Submit">
        <input className={styles.form} type="text" placeholder="Search" />
      </form>
    </div>
  );
}

export default SearchBar;
