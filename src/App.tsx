import React, { useEffect, useState } from 'react';
import PostList from './pages/Devices/components/PostList/PostList';
import CommentsModal from './pages/Devices/components/CommentsList/components/commentsModal/CommentsModal';
import './pages/Devices/components/PostList/Post.css';
import './pages/Devices/components/CommentsList/Comments.css';
import './pages/Devices/components/CommentsList/components/commentsModal/CommentsModal.css';
import usePostStore from './stores/usePostStore';
import useCommentStore from './stores/useCommentStore';
import './message.css';
import 'antd/dist/reset.css';
import { message } from 'antd';

message.config({
  duration: 5,
  maxCount: 1,
  getContainer: () => document.body,
});

function App() {
  const { posts, selectedPost, fetchPosts, selectPost, clearSelectedPost } = usePostStore();
  const { comments, fetchComments, clearComments } = useCommentStore();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handlePostClick = async (postId: number) => {
    const selected = posts.find(post => post.id === postId);
    if (selected) {
      selectPost(selected);
      await fetchComments(postId);
      setIsModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    clearSelectedPost();
    clearComments();
  };

  return (
    <>
      <PostList posts={posts} onPostClick={handlePostClick} />
      {selectedPost && isModalVisible && (
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