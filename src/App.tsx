import React, { useEffect, useState } from 'react';
import { getPosts } from './api/getPosts';
import { getComments } from './api/getComments';
import { Post } from './components/Post';
import { Comment } from './components/Comments';
import PostList from './components/PostList';
import CommentsModal from './components/CommentsModal';
import './styles/Post.css';
import './styles/Comments.css';
import './styles/CommentsModal.css';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    getPosts().then(data => {
      setPosts(data);
    });
  }, []);

  const handlePostClick = async (postId: number) => {
    const selected = posts.find(post => post.id === postId);
    if (selected) {
      setSelectedPost(selected);
      const commentsData = await getComments(postId);
      setComments(commentsData);
    }
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
    setComments([]);
  };

  return (
    <>
      <PostList posts={posts} onPostClick={handlePostClick} />
      {selectedPost && (
        <CommentsModal
          comments={comments}
          onClose={handleCloseModal}
          postTitle={selectedPost.title}
        />
      )}
    </>
  );
}

export default App;