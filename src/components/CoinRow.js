import React from "react";

const CoinRow = (props) => {
  const { coin, index } = props;
  return (
    <tr>
      <td>{index}</td>

      <td className="fs-3">
        <span>
          <img
            src={coin.image}
            alt={coin.name}
            style={{ width: "15%" }}
            className="me-3 img-fluid"
          />
        </span>
        {coin.name}
        <span className="ms-3 text-muted text-uppercase fs-4">
          {coin.symbol}
        </span>
      </td>

      <td>{coin.current_price}</td>
      <td
        className={coin.price_change_24h > 0 ? "text-success" : "text-danger"}
      >
        {coin.price_change_24h}
      </td>
      <td>{coin.total_volume}</td>
    </tr>
  );
};

export default CoinRow;
