import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import "./NewPost.css";

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };
  }

  addPost = event => {
    event.preventDefault();
    const addedPost = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(addedPost);

    this.setState({
      title: "",
      body: ""
    });
  };

  inputHandleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="page-container">
        <Sidebar logout={this.props.logout} />
        <div className="new-post-container">
          <h2 className="new-post-header">Create a new post:</h2>
          <input
            className="new-post-title"
            placeholder="Title..."
            name="title"
            onChange={this.inputHandleChange}
            value={this.state.title}
          />
          <textarea
            className="post-content"
            placeholder="Post content..."
            name="body"
            onChange={this.inputHandleChange}
            value={this.state.body}
          />
          <Link className="save-button" to="/" onClick={this.addPost}>
            Save
          </Link>
        </div>
      </div>
    );
  }
}

export default NewPost;
