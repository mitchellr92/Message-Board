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
        <Sidebar logout={this.props.logout} />
        <div className="post">
          <div className="post-text">post</div>
          <CommentSection />
        </div>
      </div>
    );
  }
}

export default Post;
