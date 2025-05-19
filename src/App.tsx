import React, { useEffect, useState } from 'react';
import { getPosts } from './api//requests/posts/getPosts';
import { getComments } from './api/requests/posts/comments/getComments';
import { Post } from './api/requests/posts/Post';
import { Comment } from './api/requests/posts/comments/Comments';
import PostList from './components/PostList/PostList';
import CommentsModal from './components/CommentsList/commentsModal/CommentsModal';
import './styles/Post/Post.css';
import './components/CommentsList/Comments.css';
import './components/CommentsList//commentsModal/CommentsModal.css';

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