import React, { useState, useEffect } from "react";

import styles from "./PlatformFilter.module.css";

let isInitial = true;

function PlatformFilter({ updateFilter, platform }) {
  // const [orderBy, setOrderBy] = useState("80");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    if (isInitial === true) {
      isInitial = false;
      return;
    }

    // updateFilter(platform, genre);
  }, [platform, genre]);

  // const orderByChangeHandler = (e) => {
  //   setOrderBy(e.target.value);
  //   console.log(orderBy);
  // };

  const genreChangeHandler = (e) => {
    setGenre(e.target.value);
    console.log(genre);
  };

  return (
    <div className={styles["filter-container"]}>
      {/* <form className={styles.filters} label="Sort by" action="">
        <select
          value={orderBy}
          onChange={orderByChangeHandler}
          className={styles["main-filter"]}
          name=""
          id=""
        >
          <option value="80">Popularity</option>
          <option value="released">Released</option>
          <option value="name">Name</option>
          <option value="Lowest Price">Lowest Price</option>
          <option value="Highest Price">Highest Price</option>
          <option value="Ratings">Ratings</option>
        </select>
      </form> */}

      <form className={styles.filters} label="Choose a genre" action="">
        <select
          value={genre}
          onChange={genreChangeHandler}
          className={styles["main-filter"]}
          name=""
          id=""
        >
          <option value="">Genres</option>
          <option value="adventure">Adventure</option>
          <option value="strategy">Strategy</option>
          <option value="action">Action</option>
          <option value="shooter">Shooter</option>
          <option value="role-playing-games-rpg">RPG</option>
          <option value="simulation">Simulation</option>
          <option value="sports">Sports</option>
          <option value="puzzle">Puzzle</option>
        </select>
      </form>
    </div>
  );
}

export default PlatformFilter;
