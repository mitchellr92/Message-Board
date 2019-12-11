import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Post from "./Components/Posts/Post/Post";
import Authenticate from "./Authentication/Authentication";
import Photos from "./Components/Photos/Photos";
import PostContainer from "./Components/Posts/PostContainer/PostContainer";
import NewPost from "./Components/Posts/NewPost/NewPost";
import EditPost from "./Components/Posts/EditPost/EditPost";
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
      .get(`https://magigarp-backend.herokuapp.com//api/posts`)
      .then(response => {
        this.setState({
          posts: response.data
        });
        console.log(this.state.posts);
      })
      .catch(err => console.log("Failure to load posts"));
  };

  componentDidMount() {
    this.getPosts();
  }

  getPost = post => {
    console.log("clicked");
    console.log(post);
    axios
      .get(`https://magigarp-backend.herokuapp.com/${post.id}`)
      .then(response => {
        this.getPosts();
        console.log(response);
      })
      .catch(err => console.log("Error"));
  };

  createPost = post => {
    axios
      .post(`https://magigarp-backend.herokuapp.com`, post)
      .then(response => {
        this.getPost();
        this.setState('data', { posts: response.data });
      })
      .catch(err => console.log("Error"));
  };

  deletePost = id => {
    console.log(id)
    axios
      .delete(`https://magigarp-backend.herokuapp.com/${id}`)
      .then(response => {
        this.getPosts();
      })
      .catch(err => console.log("Error"));
  };

  updatePost = updatedPost => {
    console.log('updated post', updatedPost)
    axios
      .put(`https://magigarp-backend.herokuapp.com/${updatedPost.id}`, updatedPost)
      .then(response => {
        this.getPosts()
      })
      .catch(err => console.log("Error"));
  };

  logoutHandler = event => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/post/:id"
          render={props => (
            <Post
              {...props}
              logout={this.logoutHandler}
              posts={this.state.posts}
              deletePost={this.deletePost}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <PostContainer
              {...props}
              logout={this.logoutHandler}
              posts={this.state.posts}
            />
          )}
        />
        <Route
          exact
          path="/createpost"
          render={props => (
            <NewPost
              {...props}
              logout={this.logoutHandler}
              createPost={this.createPost}
            />
          )}
        />
        <Route
          exact
          path="/editpost"
          render={props => (
            <EditPost
              {...props}
              logout={this.logoutHandler}
              updatePost={this.updatePost}
            />
          )}
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
