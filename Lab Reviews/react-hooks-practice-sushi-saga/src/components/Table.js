import React from "react";

function Table({ eatenSushi, money }) {
  // renders an empty plate for every element in the array
  const emptyPlates = eatenSushi.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${/* Give me how much money I have left */ money } remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
