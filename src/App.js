import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Post from "./Components/Posts/Post";
import Authenticate from "./Authentication/Authentication";
import Photos from "./Components/Photos/Photos";
import PostContainer from "./Components/Posts/PostContainer";
import NewPost from "./Components/Posts/NewPost";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  getPosts = event => {
    axios
      .get(`http://localhost:1111/api/home`)
      .then(response => {
        this.setState({
          posts: response.data
        });
        console.log(this.state.posts)
      })
      .catch(err => console.log("Failure to load posts"));
  };

  componentDidMount() {
    this.getPosts();
  }

  logoutHandler = event => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/post"
          render={props => <Post {...props} logout={this.logoutHandler} />}
        />
        <Route
          exact
          path="/home"
          render={props => (
            <PostContainer {...props} logout={this.logoutHandler} />
          )}
        />
        <Route
          exact
          path="/createpost"
          render={props => <NewPost {...props} logout={this.logoutHandler} />}
        />
        <Route
          exact
          path="/photos"
          render={props => <Photos {...props} logout={this.logoutHandler} />}
        />
      </div>
    );
  }
}

export default Authenticate(App);
