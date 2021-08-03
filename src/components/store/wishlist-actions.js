import { wishlistActions } from "./wishlist-slice";

export const fetchWishListData = () => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response = await fetch(
        "https://react-steam-project-default-rtdb.firebaseio.com/wishlist.json",
        {
          method: "GET",
        }
      );

      if (!response.ok) throw new Error("error getting response");

      const data = await response.json();

      return data;
    };
    try {
      const listData = await fetchRequest();

      dispatch(
        wishlistActions.replaceList({
          items: listData.items || [],
          totalQuantity: listData.totalQuantity,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendWishListData = (wishlist) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-steam-project-default-rtdb.firebaseio.com/wishlist.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: wishlist.items,
            totalQuantity: wishlist.totalQuantity,
          }),
        }
      );

      if (!response.ok) throw new Error("error getting response");
    };

    try {
      await sendRequest();
    } catch (err) {
      console.log(err);
    }
  };
};
