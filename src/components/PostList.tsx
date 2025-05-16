import React from 'react';
import { Post } from './Post';
import PostListItem from './PostListItem';

interface PostListProps {
    posts: Post[];
    onPostClick: (postId: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onPostClick }) => {
    return (
        <div className="container">
            <h1>All Posts</h1>
            {posts.map(post => (
                <PostListItem
                    key={post.id}
                    post={post}
                    onPostClick={onPostClick}
                />
            ))}
        </div>
    );
};

export default PostList;