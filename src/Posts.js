import React from 'react';

const BASE_URL = process.env.REACT_APP_API_URL; // Ensure this is set correctly

function Posts({ posts }) {
  return (
    <div className="posts">
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post, index) => {
          let imageUrl = post.image;
          if (imageUrl.startsWith('http://localhost:3001/')) {
            imageUrl = imageUrl.replace('http://localhost:3001/', `${BASE_URL}/`);
          }
          return (
            <div key={index} className="post">
              <h3>{post.title}</h3>
              {imageUrl && (
                <div className="image-card">
                  <img 
                    src={imageUrl} 
                    alt={post.title} 
                    className="image" 
                  />
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

export default Posts;
