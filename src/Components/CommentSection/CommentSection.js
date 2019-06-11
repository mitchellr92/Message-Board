import React, { Component } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";
import Sidebar from "../Sidebar/Sidebar";
import "./CommentSection.css";

class CommentSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="comment-section">
          <Comment />
          <NewComment />
        </div>
        <div className="sidebar-container">
          <Sidebar logout={this.props.logout} />
        </div>
      </div>
    );
  }
}

export default CommentSection;
