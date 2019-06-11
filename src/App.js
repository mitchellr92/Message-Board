import React, { Component } from "react";
import "./App.css";
import Post from "./Components/Posts/Post";
import Authenticate from './Authentication/Authentication';

class App extends Component {

  logoutHandler = (event) => {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return (
      <div>
        <Post
          logout={this.logoutHandler}
        />
      </div>
    );
  }
}

export default Authenticate(App);
