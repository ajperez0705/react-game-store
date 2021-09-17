import React from "react";
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
        <h1>Your Library</h1>
      </div>
      <div className={styles["list-container"]}>
        {libraryItems.length === 0 ? (
          <h1 className="error-message">View your purchased games here!</h1>
        ) : (
          libraryItems.map((item) => {
            return (
              <MyLibraryCard
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default MyLibrary;
