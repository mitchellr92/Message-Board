import React, { Component } from "react";

class NewComment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="new-comment">
        <form onSubmit={this.props.newComment}>
          <input
            className="comment-input"
            value={this.props.text}
            onChange={this.props.textInput}
            placeholder="Add a comment"
          />
        </form>
      </div>
    );
  }
}

export default NewComment;
