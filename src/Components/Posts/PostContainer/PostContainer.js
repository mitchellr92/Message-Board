import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import PostCard from '../PostCard/PostCard';
import Post from '../Post/Post';
import "./PostContainer.css";

class NewPost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-container">
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
