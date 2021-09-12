import { GET_COINS, FILTER_COINS, SET_FILTERED_COINS } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_COINS:
      return {
        ...state,
        coins: payload,
      };

    default:
      return state;
  }
};
