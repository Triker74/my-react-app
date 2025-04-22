import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
  }, []);

  return (
    <div className="container">
      <h1>All Posts </h1>
      {posts.map(post => (
        <div>
          <h3>{post.id}</h3>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <small>author: User №{post.userId}</small>
        </div>
      ))}
    </div>
  );
}

export default App;
