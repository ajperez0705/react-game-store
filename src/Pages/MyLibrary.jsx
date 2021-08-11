import React from "react";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import MyLibraryCard from "../organisms/layout/MyLibraryCard";

import styles from "./MyLibrary.module.css";

// Redux
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

function MyLibrary() {
  const libraryItems = useSelector((state) => state.library.items);

  return (
    <div>
      <div className={styles["user-controls"]}>
        <SearchBar />
        <Filter />
      </div>
      <div className={styles["list-container"]}>
        {libraryItems.map((item) => {
          return (
            <MyLibraryCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyLibrary;
