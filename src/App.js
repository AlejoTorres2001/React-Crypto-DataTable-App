import "./App.css";
import CoinsState from "./components/context/Coins/CoinsState";
import TableCoins from "./components/TableCoins";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <CoinsState>
      <div className="container">
        <SearchBar/>
        <div className=" row ">
          <TableCoins></TableCoins>
        </div>
      </div>
    </CoinsState>
  );
}

export default App;
