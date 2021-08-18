import React from "react";
import WishListCard from "../organisms/layout/WishListCard";

import styles from "./WishList.module.css";

// Redux
import { useSelector } from "react-redux";

function WishList() {
  const wishListItems = useSelector((state) => state.wishlist.items);

  return (
    <div>
      <div className={styles["user-controls"]}>
        <h1>Your Wishlist</h1>
      </div>
      <div className={styles["list-container"]}>
        {wishListItems.map((item) => {
          return (
            <WishListCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              slug={item.slug}
            />
          );
        })}
      </div>
    </div>
  );
}

export default WishList;
