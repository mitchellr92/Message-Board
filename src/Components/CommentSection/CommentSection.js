import React, { Component } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";
import Sidebar from "../Sidebar/Sidebar";

class CommentSection extends Component {
  render() {
    return (
      <div>
        <div>
          Comment section
          <Comment />
          <NewComment />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default CommentSection;
