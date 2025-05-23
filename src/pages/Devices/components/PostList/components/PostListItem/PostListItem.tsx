import React from "react";
import { Post } from '../../../../../../app/api/entities/Devices/IPost';

interface PostListItemProps {
    post: Post;
    onPostClick: (postId: number) => void;
}

const PostListItem: React.FC<PostListItemProps> = ({ post, onPostClick }) => {
    return (
        <div className="post-list-item" onClick={() => onPostClick(post.id)}>
            <h2>{post.id}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>author: User №{post.userId}</small>
        </div>
    );
};

export default PostListItem;