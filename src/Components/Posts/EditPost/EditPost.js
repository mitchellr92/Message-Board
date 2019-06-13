import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import "./EditPost.css";

class EditPost extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
          title: "",
          body: "",
      }
    }
    
    inputHandleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

  render() {
    return (
      <div className="page-container">
        <Sidebar logout={this.props.logout} />
        <div className="edit-post-container">
          <h2 className="edit-post-header">Edit post:</h2>
          <input
            className="edit-post-title"
            placeholder="Title..."
            name="title"
            onChange={this.inputHandleChange}
            value={this.state.title}
          />
          <textarea
            className="edit-post-content"
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

export default EditPost;
