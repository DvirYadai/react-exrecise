import React, { Component } from "react";
import "../App.css";

class Tag extends Component {
  render() {
    return (
      <div className="tag">
        <span className={removeSpace(this.props.tag)}>{this.props.tag}</span>
      </div>
    );
  }
}

function removeSpace(tag) {
  let fix = tag.replaceAll(" ", "-");
  fix = fix.replaceAll(":", "");
  return fix;
}

export default Tag;
