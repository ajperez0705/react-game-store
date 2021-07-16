import React from "react";

import styles from "./Filter.module.css";

function Filter() {
  return (
    <div>
      <form className={styles.filters} label="Sort by" action="">
        <select className={styles["main-filter"]} name="" id="">
          <option value="">Relevance</option>
          <option value="">Release Date</option>
          <option value="">Name</option>
          <option value="">Lowest Price</option>
          <option value="">Highest Price</option>
          <option value="">Ratings</option>
        </select>
      </form>
    </div>
  );
}

export default Filter;
