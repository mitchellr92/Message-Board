import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Photos.css";

class Photos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-container">
        <Sidebar logout={this.props.logout} />
        <div className="photos-container">Coming soon!</div>
      </div>
    );
  }
}

export default Photos;
