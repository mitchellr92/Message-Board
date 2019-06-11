import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <button className="logout-button" onClick={this.props.logout}>Logout</button>
        <div className="search-bar">Search</div>
        <div className="posts-link">Posts</div>
        <div className="new-post">Create new post</div>
        <div className="photos">Photos</div>
      </div>
    );
  }
}

export default Sidebar;
