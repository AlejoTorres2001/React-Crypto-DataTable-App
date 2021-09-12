import { useState, useContext, useEffect } from "react";
import coinsContext from "./context/Coins/CoinsContext";
export default function SearchBar({ handleFilterCoins }) {
  const { coins } = useContext(coinsContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleFilterCoins(coins, search);
  }, [search]);

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Start typing to get results"
      className="form-control bg-dark text-light border-0 mt-4 text-center w-100 "
      autoFocus
      value={search}
      onChange={(e) => handleOnChange(e)}
    />
  );
}
