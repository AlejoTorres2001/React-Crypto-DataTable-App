import "./App.css";
import { useState } from "react";
import CoinsState from "./components/context/Coins/CoinsState";
import TableCoins from "./components/TableCoins";
function App() {
  const [search, setSearch] = useState("");

  return (
    <CoinsState>
      <div className="container">
        <div className="row">
          
          <input
            type="text"
            placeholder="Search a Coin"
            className="form-control bg-dark text-light border-0 mt-4 text-center"
            autoFocus
            onChange={(e) => setSearch(e.target.value)}
          />

          <TableCoins search={search}></TableCoins>
        </div>
      </div>
    </CoinsState>
  );
}

export default App;
