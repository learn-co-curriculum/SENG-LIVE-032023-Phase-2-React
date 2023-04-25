import React from "react";

function Stock({ stock, buyStock }) {

  const { name, ticker, price } = stock

  return (
    <div>
      <div className="card">
        <div 
          className="card-body"
          onClick = { () => buyStock( stock ) }
        >
          <h5 className="card-title">{ name }</h5>
          <p className="card-text">{ ticker }: { price }</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
