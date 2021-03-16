import "../App.css";
import React from "react";

function Grocery(props) {
  return (
    <li className="grocery">
      <button onClick={props.onClickFunction}>
        <span className="icon">{props.count ? "-" : "+"}</span>
        {props.count} {props.name}
      </button>
    </li>
  );
}

export default Grocery;
