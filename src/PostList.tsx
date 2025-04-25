import React from 'react';
import { Post } from './api';

interface PostListProps {
    posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <div className="container">
            <h1>All Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.id}</h2>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <small>author: User №{post.userId}</small>
                </div>
            ))}
        </div>
    );
};

export default PostList;