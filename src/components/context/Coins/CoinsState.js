import { React, useReducer } from "react";
import coinsReducer from "./CoinsReducer";
import coinsContext from "./CoinsContext";
import axios from "axios";

export default function CoinsState(props) {
  const initialState = {
    coins: [],
    filteredCoins: [],
    filter: '',
  };
  const [state, dispatch] = useReducer(coinsReducer, initialState);

  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );

    dispatch({
      type: "GET_COINS",
      payload: res.data,
    });
  };
  const filterCoins = (search) => {
    const result = state.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    dispatch({
      type: "SET_FILTERED_COINS",
      payload: result,
    });
  };
  const setFilter = (filter) => {
    dispatch({
      type: "SET_FILTER",
      payload: filter,
    });
  };
  return (
    <coinsContext.Provider
      value={{
        coins: state.coins,
        getData,
        filterCoins,
        filteredCoins: state.filteredCoins,
        setFilter,
        filter:state.filter
      }}
    >
      {props.children}
    </coinsContext.Provider>
  );
}
