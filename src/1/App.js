import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container">Загрузка...</div>;

  return (
    <div className="container">
      {posts.map(post => (
        <div key={post.id} className="card">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <small>Автор: пользователь #{post.userId}</small>
        </div>
      ))}
    </div>
  );
}

export default App;
