import React, { Component } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";
import Sidebar from "../Sidebar/Sidebar";
import "./CommentSection.css";

class CommentSection extends Component {
  constructor() {
    super();

    this.state = {
      comment: [],
      text: ""
    };
  }

  textInput = event => {
    this.setState({
      text: event.target.value
    });
  };

  addNewComment = event => {
    event.preventDefault();
    const newComment = {
      username: "buttmunch85",
      text: this.state.text
    };
    this.setState({
      comment: [...this.state.comment, newComment],
      text: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div className="comment-section">
          {this.state.comment.map(comment => {
            return <Comment comment={comment} key={Math.random()} />;
          })}
          <NewComment
            text={this.state.text}
            newComment={this.addNewComment}
            textInput={this.textInput}
          />
        </div>
        <Sidebar logout={this.props.logout} />
      </div>
    );
  }
}

export default CommentSection;
