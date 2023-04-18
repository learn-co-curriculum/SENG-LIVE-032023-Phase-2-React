import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import AtmMachine from './AtmMachine'

const baseUrl = "http://localhost:3001/";
const sushiUrl = baseUrl + 'sushis/'

function App() {

  const [ sushis, setSushis ] = useState( [] )

  const [ eatenSushi, setEatenSushi ] = useState( [] )

  const [ sushiIndex, setSushiIndex ] = useState( 0 )

  const [ money, setMoney ] = useState( 200 )

  const fetchSushi = () =>
    fetch( sushiUrl ).then( r => r.json() ).then( setSushis )

  useEffect( fetchSushi, [] )

  const fourSushi = sushis.slice( sushiIndex, sushiIndex + 4 )

  const nextFourSushi = () => {
    if ( sushiIndex >= ( sushis.length - 4 ) )
      setSushiIndex( 0 )
    else
      setSushiIndex( sushiIndex + 4 )
  }

  const eatSushi = sushi => {
    
    let { id, price } = sushi

    if ( !eatenSushi.includes( id ) && money >= price ) {
      setMoney( money - price )
      setEatenSushi( [...eatenSushi, id ] )
    }
  }

  const increaseMoney = event => {
    event.preventDefault()
    let amount = parseInt( event.target.amount.value )
    if ( amount > 0 )
      setMoney( money + amount )
    event.target.reset()
  }
  
  return (
    <div className="app">
      <AtmMachine increaseMoney = { increaseMoney } />
      <br/>
      <SushiContainer
        sushis = { fourSushi }
        nextFourSushi = { nextFourSushi }
        eatSushi = { eatSushi }
        eatenSushi = { eatenSushi }
      />
      <Table 
        eatenSushi={ eatenSushi }
        money = { money }
      />
    </div>
  );
}

export default App;
