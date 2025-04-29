import React from 'react';
import { Post } from './Post';
import PostListItem from './PostListItem';

interface PostListProps {
    posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <div className="container">
            <h1>All Posts</h1>
            {posts.map(post => (
                <PostListItem key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;