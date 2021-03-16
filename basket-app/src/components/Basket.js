import "../App.css";
import React from "react";
import Grocery from "./Grocery";

function Basket(props) {
  function removeGrocery(e) {
    if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "none";
    } else {
      e.target.style.textDecoration = "line-through";
    }
  }

  return (
    <div className="basket-class">
      <p>Basket</p>
      <button className="trash" onClick={() => props.setBasketArr([])}>
        🗑️
      </button>
      <ul>
        {props.basketArr.map((grocery) => (
          <Grocery
            name={grocery.name}
            count={grocery.count}
            onClickFunction={removeGrocery}
          />
        ))}
      </ul>
    </div>
  );
}

export default Basket;
