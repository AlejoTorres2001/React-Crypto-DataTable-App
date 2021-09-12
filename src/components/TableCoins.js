import React, { useContext, useEffect } from "react";
import coinsContext from "./context/Coins/CoinsContext";
import CoinRow from "./CoinRow";

const TableCoins = ({ search }) => {
  const { getData, coins } = useContext(coinsContext);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const titles = ["#", "Coin", "Price", "Price Change", "24hs Volume"];

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
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
  );
};

export default TableCoins;
