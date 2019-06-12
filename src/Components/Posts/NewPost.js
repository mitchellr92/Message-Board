import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./NewPost.css";

class NewPost extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="page-container">
        <Sidebar logout={this.props.logout} />
        <div className="new-post-container">Under Construction!</div>
      </div>
    );
  }
}

export default NewPost;
