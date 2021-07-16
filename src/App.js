// Hooks
import "./App.css";

// Components
import PrimaryBtn from "./organisms/buttons/PrimaryBtn";
import SecondaryBtn from "./organisms/buttons/SecondaryBtn";
import CartItem from "./components/CartItem";
import Cart from "./components/Cart";
import GameDetailContent from "./organisms/layout/GameDetailContent";
import Header from "./components/Header";
import HeroProdCard from "./organisms/layout/HeroProdCard";
import MediumProdCard from "./organisms/layout/MediumProdCard";
import NavBar from "./components/NavBar";
import SmallProdCard from "./organisms/layout/SmallProdCard";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import GameDetail from "./Pages/GameDetail";
import WishList from "./Pages/WishList";
import MyLibrary from "./Pages/MyLibrary";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="container-wrapper">
        <Home />
        {/* <Search /> */}
        {/* <GameDetail /> */}
        {/* <WishList /> */}
        {/* <MyLibrary /> */}
      </div>
    </div>
  );
}

export default App;

// fetching from the backend
// const videoGameTest = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/");
//     const data = await response.json();
//     console.log(data, data.next);
//   } catch (error) {
//     console.log(error);
//   }
// };
