import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const baseUrl = 'http://localhost:3001/'
const stocksUrl = baseUrl + 'stocks/'

function MainContainer() {

  const [ stocks, setStocks ] = useState( [] )

  const [ boughtStocks, setBoughtStocks ] = useState( [] )

  const [ sortBy, setSortBy ] = useState( 'None' )

  const [ filterBy, setFilterBy ] = useState( 'All' )

  function fetchStocks () {
    fetch( stocksUrl )
    .then( r => r.json() )
    .then( stocksData => setStocks( stocksData ) )
  }

  useEffect( fetchStocks, [] )

  function buyStock ( stock ) {
    setBoughtStocks( [...boughtStocks, stock.id ] )
  }

  function sellStock ( stock ) {
    const removedStocks = boughtStocks.filter( id => id !== stock.id )
    setBoughtStocks( removedStocks )
  }

  function changeSort ( event ) {
    setSortBy( event.target.value )
  }

  function changeFilter ( event ) {
    setFilterBy( event.target.value )
  }

  const sortedStocks = [...stocks]
  if ( sortBy === "Alphabetically" )
    sortedStocks.sort( ( stock1, stock2 ) => 
      stock1.ticker.toUpperCase().localeCompare( stock2.ticker.toUpperCase() )
    )
  if ( sortBy === 'Price' )
    sortedStocks.sort( ( stock1, stock2 ) => stock1.price - stock2.price )

  const filteredStocks = sortedStocks.filter( stock => stock.type === filterBy || filterBy === 'All' )

  return (
    <div>
      <SearchBar 
        sortBy = { sortBy }
        changeSort = { changeSort }
        changeFilter = { changeFilter }
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks = { filteredStocks }
            buyStock = { buyStock }
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            stocks = { stocks }
            boughtStocks = { boughtStocks }
            sellStock = { sellStock }
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
