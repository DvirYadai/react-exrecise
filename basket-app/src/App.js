import "./App.css";
import { useState } from "react";
import Groceries from "./components/Groceries";
import Basket from "./components/Basket";

let originalBasket = [];
const originalGroceriesArr = [
  "Strawberry",
  "Blueberry",
  "Orange",
  "Banana",
  "Apple",
  "Carrot",
  "Celery",
  "Mushroom",
  "Green Pepper",
  "Eggs",
  "Cheese",
  "Butter",
  "Chicken",
  "Beef",
  "Pork",
  "Fish",
  "Rice",
  "Pasta",
  "Bread",
];

function App() {
  const [basketArr, setBasketArr] = useState([]);
  const [groceriesArr, setGroceriesArr] = useState([
    "Strawberry",
    "Blueberry",
    "Orange",
    "Banana",
    "Apple",
    "Carrot",
    "Celery",
    "Mushroom",
    "Green Pepper",
    "Eggs",
    "Cheese",
    "Butter",
    "Chicken",
    "Beef",
    "Pork",
    "Fish",
    "Rice",
    "Pasta",
    "Bread",
  ]);
  originalBasket =
    originalBasket.length < basketArr.length ? [...basketArr] : originalBasket;

  return (
    <>
      <input
        className="search"
        placeHolder="Search"
        onChange={(e) => {
          const text = e.target.value;
          if (text === "") {
            setGroceriesArr(originalGroceriesArr);
            return setBasketArr(originalBasket);
          }
          const temp1 = basketArr.filter((obj) => obj.name.match(text));
          const temp2 = groceriesArr.filter((obj) => obj.match(text));
          setGroceriesArr(temp2);
          return setBasketArr(temp1);
        }}
      ></input>
      <div className="App">
        <Groceries
          groceriesArr={groceriesArr}
          basketArr={basketArr}
          setBasketArr={setBasketArr}
        />
        <Basket basketArr={basketArr} setBasketArr={setBasketArr} />
      </div>
    </>
  );
}

export default App;
