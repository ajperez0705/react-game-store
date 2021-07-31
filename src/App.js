// CSS
import "./App.css";

// Hooks
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import GameDetail from "./Pages/GameDetail";
import WishList from "./Pages/WishList";
import MyLibrary from "./Pages/MyLibrary";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <div className="container-wrapper">
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/wish-list" exact component={WishList} />
          <Route path="/my-library" exact component={MyLibrary} />
          <Route path="/game-detail/:slug" component={GameDetail} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
