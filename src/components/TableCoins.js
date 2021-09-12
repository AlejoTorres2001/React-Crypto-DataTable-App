import React, { useContext,useState,useEffect } from "react";
import coinsContext from "./context/Coins/CoinsContext";
import CoinRow from "./CoinRow";
import SearchBar from "./SearchBar";
const TableCoins = () => {
  const {coins,getData} = useContext(coinsContext);
  useEffect( ()  => {
    getData();
   // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []
 );
  const [filteredCoins, setfilteredCoins] = useState(coins)
  const titles = ["#", "Coin", "Price", "Price Change", "24hs Volume"];

  const handleFilterCoins= (coins,filter) =>{
    setfilteredCoins(coins.filter((coin) => 
        coin.name.toLowerCase().includes(filter.toLowerCase())));
  }
  return (
    <div className="container">
    <SearchBar handleFilterCoins={handleFilterCoins}></SearchBar>
    <table className="table table-dark mt-4 table-hover ">
      <thead>
        <tr>
          {titles.map((title) => (
            <td>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow coin={coin} key={coin.id} index={index + 1}></CoinRow>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TableCoins;
