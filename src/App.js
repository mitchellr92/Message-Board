import React, { Component } from "react";
import "./App.css";
import CommentSection from "./Components/CommentSection/CommentSection";

class App extends Component {
  constructor() {
    super();
  }

  logoutHandler = (event) => {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return (
      <div>
        <CommentSection
          logout={this.logoutHandler}
        />
      </div>
    );
  }
}

export default App;
