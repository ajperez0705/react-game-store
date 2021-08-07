// CSS
import "./App.css";

// Hooks
import { BrowserRouter, Route, Switch } from "react-router-dom";

// React Lib
import { useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import GameDetail from "./Pages/GameDetail";
import WishList from "./Pages/WishList";
import MyLibrary from "./Pages/MyLibrary";
import Cart from "./components/Cart";
import { sendCartData, fetchCartData } from "./components/store/cart-actions";
import {
  fetchWishListData,
  sendWishListData,
} from "./components/store/wishlist-actions";
import FilteredGamesList from "./Pages/FilteredGamesList";
import SignInForm from "./components/SignInForm";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./Pages/ForgotPassword";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const wishList = useSelector((state) => state.wishlist);
  const notification = useSelector((state) => state.errorUI.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
    dispatch(fetchWishListData());
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
    dispatch(sendWishListData(wishList));

    // fetch("https://react-steam-project-default-rtdb.firebaseio.com/cart.json", {
    //   method: "PUT",
    //   body: JSON.stringify(cart),
    // });
  }, [cart, wishList, dispatch]);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <NavBar />
        <div className="container-wrapper">
          <Switch>
            <PrivateRoute path="/" exact component={Home} />
            <Route path="/login" exact component={SignInForm} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/forgot-password" exact component={ForgotPassword} />
            <Route path="/search" exact component={Search} />
            <Route path="/games/:filter" component={FilteredGamesList} />
            <Route path="/wish-list" exact component={WishList} />
            <Route path="/my-library" exact component={MyLibrary} />
            <Route path="/game-detail/:slug" component={GameDetail} />
            <Route path="/cart" component={Cart} />
            <Route path="/" render={() => <div>404</div>} />
          </Switch>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
