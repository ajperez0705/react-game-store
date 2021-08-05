import React, { useState } from "react";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";

import styles from "./Search.module.css";

// Helpers
import { searchDB } from "../helpers/fetch-functions";
import MediumProdCard from "../organisms/layout/MediumProdCard";

function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchData, setSearchData] = useState([]);

  const searchHandler = async (inputValue, e) => {
    e.preventDefault();

    setIsLoading(true);
    setIsSearching(true);

    const initData = await searchDB(`http://localhost:3001/game/${inputValue}`);
    console.log(initData);

    const filteredData = initData.filter((result) => result.ratings_count > 50);

    setSearchData(filteredData);

    setIsLoading(false);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles["user-controls"]}>
          <SearchBar submit={searchHandler} />
          <Filter />
        </div>
        <div className={styles["content-container"]}>
          {!isSearching ? (
            <h1 className={styles["error-msg"]}>You need to search porra</h1>
          ) : (
            ""
          )}
          {isLoading ? (
            <h1 className={styles["error-msg"]}>Loading</h1>
          ) : (
            searchData.map((game) => {
              return <MediumProdCard key={game.id} data={game} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
