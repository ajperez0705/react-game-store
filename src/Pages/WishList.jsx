import React from "react";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import WishListCard from "../organisms/layout/WishListCard";

import styles from "./WishList.module.css";

function WishList() {
  return (
    <div>
      <div className={styles["user-controls"]}>
        <SearchBar />
        <Filter />
      </div>
      <div className={styles["list-container"]}>
        <WishListCard />
      </div>
    </div>
  );
}

export default WishList;
