import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";
import Sidebar from "../Sidebar/Sidebar";
import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const post = this.props.posts.find(post => {
      return post.id == this.props.match.params.id;
    })

    if (post === undefined) {
      return <p>Nothing here</p>
    }

    console.log('post', post);
    return (
      <div className="posts-container">
        <Sidebar logout={this.props.logout} />
        <div className="post">
          <div className="post-title">{post.title}</div>
          <div className="post-text">{post.body}</div>
          <CommentSection />
        </div>
      </div>
    );
  }
}

export default Post;
