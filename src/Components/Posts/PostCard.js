import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';

class PostCard extends Component {

    render() {
        return (
            <Link to={`/post/${this.props.post.id}`} className="post-card">
                <h2>{this.props.post.title}</h2>
                <div>{this.props.post.body}</div>
            </Link>
        )
    }
}

export default PostCard;