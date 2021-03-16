import "../App.css";
import React from "react";
import Grocery from "./Grocery";

function Groceries(props) {
  const { basketArr } = props;
  const { setBasketArr } = props;

  function addGrocery(e) {
    const item = basketArr.filter(
      (item) => item.name === e.target.innerText.slice(1)
    )[0];
    if (item) {
      const temp = [...basketArr];
      const { name } = item;
      const itemIndex = temp.findIndex((item) => item.name === name);
      temp[itemIndex].count += 1;
      setBasketArr(temp);
      return;
    }
    setBasketArr([
      ...basketArr,
      {
        name: e.target.innerText.slice(1),
        count: 1,
      },
    ]);
  }

  return (
    <div className="groceries-class">
      <p>Groceries</p>
      <ul>
        {props.groceriesArr.map((grocery) => (
          <Grocery name={grocery} onClickFunction={addGrocery} />
        ))}
      </ul>
    </div>
  );
}

export default Groceries;
