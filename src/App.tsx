import React, { useEffect, useState } from 'react';
import { getPosts } from './app/api//requests/posts/getPosts';
import { getComments } from './app/api/requests/posts/comments/getComments';
import { Post } from './app/api/entities/Devices/IPost';
import { Comment } from './app/api/entities/Devices/IComments'
import PostList from './pages/Devices/components/PostList/PostList';
import CommentsModal from './pages/Devices/components/CommentsList/components/commentsModal/CommentsModal';
import './pages/Devices/components/PostList/Post.css';
import './pages/Devices/components/CommentsList/Comments.css';
import './pages/Devices/components/CommentsList/components/commentsModal/CommentsModal.css';

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