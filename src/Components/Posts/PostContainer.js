import React, { Component } from "react";
import Sidebar from '../Sidebar/Sidebar';
import "./PostContainer.css";

class NewPost extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="posts">
        <Sidebar logout={this.props.logout} />
        <div className="post-container">Under Construction!</div>
      </div>
    );
  }
}

export default NewPost;
