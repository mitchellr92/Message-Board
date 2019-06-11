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
      </div>
    );
  }
}

export default Sidebar;
