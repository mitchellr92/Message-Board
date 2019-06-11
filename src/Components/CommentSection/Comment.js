import React, { Component } from "react";
import "./Comment.css";

class Comment extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="comment">
        <div className="user">{this.props.comment.username}</div>
        <div className="text">{this.props.comment.text}</div>
      </div>
    );
  }
}

export default Comment;
