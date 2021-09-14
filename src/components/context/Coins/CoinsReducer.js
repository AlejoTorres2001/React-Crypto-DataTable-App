import { GET_COINS,SET_FILTERED_COINS,SET_FILTER } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_COINS:
      return {
        ...state,
        coins: payload,
        filteredCoins: payload,
      };
      case SET_FILTERED_COINS:
        return {
          ...state,
          filteredCoins: payload,
        };
        case SET_FILTER:
          return {
            ...state,
            filter: payload,
          };

    default:
      return state;
  }
};
