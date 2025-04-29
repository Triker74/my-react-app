import React from "react";
import { Post } from "./Post";

interface PostListItemProps {
    post: Post;
}

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
    return (
        <div>
            <h2>{post.id}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>author: User №{post.userId}</small>
        </div>
    );
};

export default PostListItem;