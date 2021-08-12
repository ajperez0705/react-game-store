import { libraryActions } from "./library-slice";
import { db } from ".../../../src/firebase";

export const fetchLibraryData = (user) => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      let dbArr = [];
      await db
        .collection("users")
        .doc(user?.displayName)
        .collection("library")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            let tempCopy = JSON.parse(JSON.stringify(doc.data()));

            dbArr.push(tempCopy);
          });
        });
      return dbArr;
    };
    try {
      const libraryData = await fetchRequest();
      dispatch(
        libraryActions.replaceList({
          items: libraryData[1].items || [],
          totalQuantity: libraryData[0].totalQuantity,
          totalAmount: libraryData[0].totalAmount,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendLibraryData = (library, user) => {
  return async () => {
    const sendRequest = async () => {
      db.collection("users")
        .doc(user?.displayName)
        .collection("library")
        .doc("library-items")
        .set({
          items: library.items,
        });

      db.collection("users")
        .doc(user?.displayName)
        .collection("library")
        .doc("library-details")
        .set({
          totalQuantity: library.totalQuantity,
        });
    };
    try {
      await sendRequest();
    } catch (error) {}
  };
};
