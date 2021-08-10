import { cartActions } from "./cart-slice";
// import { errorUIActions } from "./errorUI-slice";
import { db } from ".../../../src/firebase";

export const fetchCartData = (user) => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      let dbArr = [];
      await db
        .collection("users")
        .doc(user?.uid)
        .collection("cart")
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
      console.log(cartData[0].totalAmount);
      dispatch(
        cartActions.replaceCart({
          items: cartData[1].items || [],
          totalQuantity: cartData[0].totalQuantity,
          totalAmount: cartData[0].totalAmount,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendCartData = (cart, user) => {
  console.log(cart);
  return async () => {
    const sendRequest = async () => {
      db.collection("users")
        .doc(user?.uid)
        .collection("cart")
        .doc("cart-items")
        .set({
          items: cart.items,
        });

      db.collection("users")
        .doc(user?.uid)
        .collection("cart")
        .doc("cart-details")
        .set({
          totalAmount: cart.totalAmount,
          totalQuantity: cart.totalQuantity,
        });
    };

    try {
      await sendRequest();
    } catch (error) {}
  };
};

// export const fetchCartData = () => {
//   return async (dispatch) => {
//     const fetchRequest = async () => {
//       const response = await fetch(
//         "https://react-steam-project-default-rtdb.firebaseio.com/cart.json",
//         {
//           method: "GET",
//         }
//       );

//       if (!response.ok) throw new Error("error getting response");

//       const data = await response.json();

//       return data;
//     };
//     try {
//       const cartData = await fetchRequest();

//       dispatch(
//         cartActions.replaceCart({
//           items: cartData.items || [],
//           totalQuantity: cartData.totalQuantity,
//           totalAmount: cartData.totalAmount,
//         })
//       );
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     const sendRequest = async () => {
//       const response = await fetch(
//         "https://react-steam-project-default-rtdb.firebaseio.com/cart.json",
//         {
//           method: "PUT",
//           body: JSON.stringify({
//             items: cart.items,
//             totalAmount: cart.totalAmount,
//             totalQuantity: cart.totalQuantity,
//           }),
//         }
//       );

//       if (!response.ok) throw new Error("error getting response");
//     };

//     try {
//       await sendRequest();
//     } catch (error) {}
//   };
// };
