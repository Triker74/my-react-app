import React, { useEffect } from 'react';
import PostList from './pages/Devices/components/PostList/PostList';
import CommentsModal from './pages/Devices/components/CommentsList/components/commentsModal/CommentsModal';
import './pages/Devices/components/PostList/Post.css';
import './pages/Devices/components/CommentsList/Comments.css';
import './pages/Devices/components/CommentsList/components/commentsModal/CommentsModal.css';
import usePostStore from './stores/usePostStore';
import useCommentStore from './stores/useCommentStore';

function App() {
  const { posts, selectedPost, fetchPosts, selectPost, clearSelectedPost } = usePostStore();
  const { comments, fetchComments, clearComments } = useCommentStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handlePostClick = async (postId: number) => {
    const selected = posts.find(post => post.id === postId);
    if (selected) {
      selectPost(selected);
      await fetchComments(postId);
    }
  };

  const handleCloseModal = () => {
    clearSelectedPost();
    clearComments();
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