import React from 'react';
import { Comment } from '../../../api/requests/posts/comments/Comments';
import CommentsList from '../CommentsList';

interface CommentsModalProps {
    comments: Comment[];
    onClose: () => void;
    postTitle: string;
}

const CommentsModal: React.FC<CommentsModalProps> = ({ comments, onClose, postTitle }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Comments for "{postTitle}"</h2>
                <button onClick={onClose}>Close</button>
                <CommentsList comments={comments} />
            </div>
        </div>
    );
};

export default CommentsModal;