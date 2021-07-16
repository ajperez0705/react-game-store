import React from "react";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import MyLibraryCard from "../organisms/layout/MyLibraryCard";

import styles from "./MyLibrary.module.css";

function MyLibrary() {
  return (
    <div>
      <div className={styles["user-controls"]}>
        <SearchBar />
        <Filter />
      </div>
      <div className={styles["list-container"]}>
        <MyLibraryCard />
      </div>
    </div>
  );
}

export default MyLibrary;
