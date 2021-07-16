import React from "react";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";

import styles from "./Search.module.css";

function Search() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles["user-controls"]}>
          <SearchBar />
          <Filter />
        </div>
        <div className={styles["content-container"]}>
          <h1 className={styles["error-msg"]}>No Search Results</h1>
        </div>
      </div>
    </div>
  );
}

export default Search;
