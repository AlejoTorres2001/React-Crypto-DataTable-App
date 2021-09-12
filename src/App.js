import "./App.css";
import CoinsState from "./components/context/Coins/CoinsState";
import TableCoins from "./components/TableCoins";
function App() {

  return (
    <CoinsState>
        <div className=" row ">
          <TableCoins></TableCoins>
        </div>
    </CoinsState>
  );
}

export default App;
