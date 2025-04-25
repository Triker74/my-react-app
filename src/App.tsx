import React, { useEffect, useState } from 'react';
import { getPosts, Post } from './api';
import PostList from './PostList';
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