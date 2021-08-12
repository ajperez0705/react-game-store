import { wishlistActions } from "./wishlist-slice";
import { db } from ".../../../src/firebase";

export const fetchWishListData = (user) => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      let dbArr = [];
      await db
        .collection("users")
        .doc(user?.displayName)
        .collection("wishlist")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            let tempCopy = JSON.parse(JSON.stringify(doc.data()));

            dbArr.push(tempCopy);
          });
        });
      console.log(dbArr);
      return dbArr;
    };
    try {
      const cartData = await fetchRequest();
      dispatch(
        wishlistActions.replaceList({
          items: cartData[1].items || [],
          totalQuantity: cartData[0].totalQuantity,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendWishListData = (wishlist, user) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      db.collection("users")
        .doc(user?.displayName)
        .collection("wishlist")
        .doc("wishlist-items")
        .set({
          items: wishlist.items,
        });

      db.collection("users")
        .doc(user?.displayName)
        .collection("wishlist")
        .doc("wishlist-details")
        .set({
          totalQuantity: wishlist.totalQuantity,
        });
    };

    try {
      await sendRequest();
    } catch (err) {
      console.log(err);
    }
  };
};
