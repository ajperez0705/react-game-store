import "./App.css";
import PrimaryBtn from "./organisms/buttons/PrimaryBtn";
import SecondaryBtn from "./organisms/buttons/SecondaryBtn";
import GameDetailContent from "./organisms/layout/GameDetailContent";
import Header from "./organisms/layout/Header";
import HeroProdCard from "./organisms/layout/HeroProdCard";
import MediumProdCard from "./organisms/layout/MediumProdCard";
import NavBar from "./organisms/layout/NavBar";
import SmallProdCard from "./organisms/layout/SmallProdCard";

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

function App() {
  return (
    <div>
      <GameDetailContent />
    </div>
  );
}

export default App;
