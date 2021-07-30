import React from "react";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";

import styles from "./Search.module.css";

// Helpers
import { searchDB } from "../helpers/fetch-functions";

function Search() {
  const searchHandler = async (inputValue, e) => {
    e.preventDefault();

    // const data = await searchDB(inputValue)("/dynamicSearch");
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles["user-controls"]}>
          <SearchBar submit={searchHandler} />
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
