import React, { Component } from "react";
import "../App.css";

class IssueCard extends Component {
  render() {
    return (
      <div className="issue-card">
        <p className="title">{this.props.title}</p>
        <div className="tags-div">{this.props.tags}</div>
        <p className="comments">
          {this.props.comments === 0 ? null : this.props.comments + " 🗨"}
        </p>
        <p className="info">{`${this.props.id} opened ${calculateTime(
          this.props.date
        )} ago by ${this.props.userName}`}</p>
      </div>
    );
  }
}

function calculateTime(date) {
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays + " days";
}

export default IssueCard;
