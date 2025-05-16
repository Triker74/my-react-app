import React from 'react';
import { Comment } from './Comments';

interface CommentsListProps {
    comments: Comment[];
}

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id} className="comment-item">
                    <h4>{comment.name}</h4>
                    <p>{comment.body}</p>
                    <small>Email: {comment.email}</small>
                </div>
            ))}
        </div>
    );
};

export default CommentsList;