// CSS
import "./App.css";

// Hooks
import { BrowserRouter, Route, Switch } from "react-router-dom";

// React Lib
import { useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import GameDetail from "./Pages/GameDetail";
import WishList from "./Pages/WishList";
import MyLibrary from "./Pages/MyLibrary";
import Cart from "./components/Cart";
import Payment from "./Pages/Payment";
import { sendCartData, fetchCartData } from "./components/store/cart-actions";
import {
  sendLibraryData,
  fetchLibraryData,
} from "./components/store/library-actions";
import {
  fetchWishListData,
  sendWishListData,
} from "./components/store/wishlist-actions";
import FilteredGamesList from "./Pages/FilteredGamesList";
import SignInForm from "./components/SignInForm";
// import { auth } from "./firebase";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./Pages/ForgotPassword";
import ScrollToTop from "./organisms/ui-components/ScrollToTop";

import { useAuth } from "./contexts/AuthContext";

// Helpers

let isInitial = true;
const promise = loadStripe(
  "pk_test_51JMyQHGlODK871q6XYOf5lRbRWuqFfKBCzf4ZeI3YFXTlT9gw5a2X2QmuhaWQbiOrEBgaaaEq4lmkzvRGXAhP1mC00z6cbkcSg"
);

function App() {
  const cart = useSelector((state) => state.cart);
  const wishList = useSelector((state) => state.wishlist);
  const library = useSelector((state) => state.library);
  // const notification = useSelector((state) => state.errorUI.notification);
  const dispatch = useDispatch();
  const { currentUser } = useAuth();

  useEffect(() => {
    dispatch(fetchLibraryData(currentUser));
    dispatch(fetchCartData(currentUser));
    dispatch(fetchWishListData(currentUser));
  }, [dispatch, currentUser]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendLibraryData(library, currentUser));
    dispatch(sendCartData(cart, currentUser));
    dispatch(sendWishListData(wishList, currentUser));
  }, [cart, wishList, library, dispatch]);

  // useEffect(() => {
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   dispatch(sendLibraryData(library, currentUser));
  // }, [library]);

  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <ScrollToTop />
      <div className="container-wrapper">
        <Switch>
          <Route path="/login" exact component={SignInForm} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/search" exact component={Search} />
          <PrivateRoute
            path="/platform/:filter"
            component={FilteredGamesList}
          />
          <PrivateRoute path="/wish-list" exact component={WishList} />
          <PrivateRoute path="/my-library" exact component={MyLibrary} />
          <PrivateRoute path="/game-detail/:slug" component={GameDetail} />
          <PrivateRoute path="/cart" component={Cart} />
          <PrivateRoute path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </PrivateRoute>
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
