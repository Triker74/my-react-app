import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
  }, []);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setComments(response.data);
      })
  }, []);

  return (
    <div className="container">
      <h1>All Posts </h1>
      {posts.map(post => (
        <div>
          <h2>{post.id}</h2>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <small>author: User №{post.userId}</small>
        </div>
        
      ))}

{comments.map(comment => (
        <div>
          <h2>{comment.id}</h2>
          <h3>{comment.name}</h3>
          <h4>{comment.email}</h4>
          <p>{comment.body}</p>
          <small>Post: №{comment.postId}</small>
        </div>
        
      ))}
    </div>
  );
}

export default App;