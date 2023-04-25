import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, buyStock }) {

  const renderStocks = stocks.map( stock =>
    <Stock 
      key = { stock.id }
      stock = { stock }
      buyStock = { buyStock }
    />)

  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      { renderStocks }
    </div>
  );
}

export default StockContainer;
