import { React, useReducer } from "react";
import coinsReducer from "./CoinsReducer";
import coinsContext from "./CoinsContext";
import axios from "axios";

export default function CoinsState(props) {
  const initialState = {
    coins: [],
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
  return (
    <coinsContext.Provider
      value={{
        coins: state.coins,
        getData,
      }}
    >
      {props.children}
    </coinsContext.Provider>
  );
}
