import React from "react";
import SecondaryBtn from "../buttons/SecondaryBtn";

import styles from "./MyLibraryCard.module.css";

// Redux
import { useDispatch } from "react-redux";
import { cartActions } from "../../components/store/cart-slice";
import { wishlistActions } from "../../components/store/wishlist-slice";

function MyLibraryCard({ id, name, image }) {
  // const dispatch = useDispatch();

  // const libraryItem = {
  //   id: id,
  //   name: name,
  //   image: image,
  // };

  return (
    <div>
      <div
        id={id}
        style={{ backgroundImage: `url(${image})` }}
        className={styles.container}
      >
        <div className={styles["left-panel"]}>
          <h1 className={styles.title}>{name}</h1>
        </div>
        <div className={styles["right-panel"]}>
          <h1 className={styles.completed}>% Completed</h1>
          <SecondaryBtn content="Play Game" />
        </div>
      </div>
    </div>
  );
}

export default MyLibraryCard;
