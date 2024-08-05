import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Post from './Post';
import Posts from './Posts';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Create Post</Link>
          <Link to="/posts">All Posts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Post addPost={addPost} />} />
          <Route path="/posts" element={<Posts posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
