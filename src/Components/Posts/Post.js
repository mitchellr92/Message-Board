import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";
import Sidebar from "../Sidebar/Sidebar";
import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="posts-container">
        <div className="post">
          <div className="post-text">post</div>
          <CommentSection />
        </div>
        <Sidebar logout={this.props.logout} />
      </div>
    );
  }
}

export default Post;
