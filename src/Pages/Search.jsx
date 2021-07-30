import React, { useState } from "react";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";

import styles from "./Search.module.css";

// Helpers
import { searchDB } from "../helpers/fetch-functions";
import SmallProdCard from "../organisms/layout/SmallProdCard";

function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);

  const searchHandler = async (inputValue, e) => {
    e.preventDefault();
    console.log(inputValue);

    setIsLoading(true);

    const data = await searchDB(`/game/${inputValue}`);
    setSearchData(data);
    console.log(searchData);

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
          {isLoading ? (
            <h1 className={styles["error-msg"]}>Loading</h1>
          ) : (
            searchData.map((game) => {
              return <SmallProdCard key={game.id} data={game} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
