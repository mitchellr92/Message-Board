import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import PostCard from './PostCard';
import Post from './Post';
import "./PostContainer.css";

class NewPost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="posts">
        <Sidebar logout={this.props.logout} />
        <div className="post-container">
          {this.props.posts.map(post => {
            return <PostCard post={post} key={post.id}/>;
          })}
        </div>
      </div>
    );
  }
}

export default NewPost;
