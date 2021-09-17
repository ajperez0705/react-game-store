import React from "react";
import WishListCard from "../organisms/layout/WishListCard";

import styles from "./WishList.module.css";

// Redux
import { useSelector } from "react-redux";

function WishList() {
  const wishListItems = useSelector((state) => state.wishlist.items);
  const cart = useSelector((state) => state.cart.items);
  const library = useSelector((state) => state.library.items);

  return (
    <div>
      <div className={styles["user-controls"]}>
        <h1>Your Wishlist</h1>
      </div>
      <div className={styles["list-container"]}>
        {wishListItems.length === 0 ? (
          <h1 className="error-message">
            When viewing a game, click the add to watchlist button to add that
            game here!
          </h1>
        ) : (
          wishListItems.map((item) => {
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
          })
        )}
      </div>
    </div>
  );
}

export default WishList;
