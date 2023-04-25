import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, boughtStocks, sellStock }) {

  const filterBoughtStocks = stocks.filter( stock => boughtStocks.includes( stock.id ) )

  const renderPortfolioStocks = filterBoughtStocks.map( stock =>
    <Stock 
      key = { stock.id }
      stock = { stock }
      buyStock = { sellStock }
    />)

  return (
    <div>
      <h2>My Portfolio</h2>
      {/* render your portfolio stocks here */}
      { renderPortfolioStocks }
    </div>
  );
}

export default PortfolioContainer;
