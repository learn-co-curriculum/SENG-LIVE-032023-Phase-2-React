import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer(props) {

  // const { sushis } = props

  const renderSushi = props.sushis.map( sushi =>
    <Sushi
      key = { sushi.id }
      sushi = { sushi }
      eatSushi = { props.eatSushi }
      eatenSushi = { props.eatenSushi }
    />
  )


  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      { renderSushi }
      <MoreButton
        nextFourSushi = { props.nextFourSushi }
      />
    </div>
  );
}

export default SushiContainer;
