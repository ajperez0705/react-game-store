import { cartActions } from "./cart-slice";
import { errorUIActions } from "./errorUI-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response = await fetch(
        "https://react-steam-project-default-rtdb.firebaseio.com/cart.json",
        {
          method: "GET",
        }
      );

      if (!response.ok) throw new Error("error getting response");

      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchRequest();

      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalAmount: cartData.totalAmount,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-steam-project-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalAmount: cart.totalAmount,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) throw new Error("error getting response");
    };

    try {
      await sendRequest();
    } catch (error) {}
  };
};
