import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <button className="logout-button" onClick={this.props.logout}>
          Logout
        </button>

        <div className="search-bar">Search</div>

        <Link to='/home' className="link">
          <div className="posts-link">Posts</div>
        </Link>
        <Link to='/createpost' className="link">
          <div className="new-post">Create new post</div>
        </Link>
        <Link to='/photos' className="link">
          <div className="photos">Photos</div>
        </Link>
      </div>
    );
  }
}

export default Sidebar;
