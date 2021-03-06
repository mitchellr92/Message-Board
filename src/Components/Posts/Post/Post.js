import React, { Component } from "react";
import { Link } from "react-router-dom";
import CommentSection from "../../CommentSection/CommentSection";
import Sidebar from "../../Sidebar/Sidebar";
import "./Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const post = this.props.posts.find(post => {
      return post.id == this.props.match.params.id;
    });

    if (post === undefined) {
      return <p>Nothing here</p>;
    }

    console.log("post", post);
    return (
      <div className="page-container">
        <Sidebar logout={this.props.logout} />
        <div className="post">
          <div className="button-container">
            <Link className="post-buttons" to="/editpost">Edit Post</Link>
            <Link
              className="post-buttons"
              to="/"
              onClick={() => {
                this.props.deletePost(this.props.match.params.id);
              }}
            >
              Delete Post
            </Link>
          </div>
          <div className="post-title">{post.title}</div>
          <div className="post-text">{post.body}</div>
          <CommentSection />
        </div>
      </div>
    );
  }
}

export default Post;
