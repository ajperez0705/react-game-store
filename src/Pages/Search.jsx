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
    let initSearchData = [];

    e.preventDefault();
    console.log(inputValue);

    setIsLoading(true);
    setIsSearching(true);

    const data = await searchDB(`/game/${inputValue}`);
    // initSearchData = await searchDB(`/game/${inputValue}`);

    // Loop through init data and filter our any games that do not have a genre
    // initSearchData.forEach((game) => {
    //   let genreArr = game.genres;

    //   if (genreArr < 0) {
    //     initSearchData = initSearchData.filter((gameToRemove) =>
    //       gameToRemove.genres !== genreArr;
    //     );
    //   }
    // });

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
