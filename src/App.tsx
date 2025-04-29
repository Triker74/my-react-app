import React, { useEffect, useState } from 'react';
import { getPosts } from './api/getPosts';
import { Post } from './components/Post';
import PostList from './components/PostList';
import './App.css';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then(data => {
      setPosts(data);
    });
  }, []);

  return <PostList posts={posts} />;
}

export default App;