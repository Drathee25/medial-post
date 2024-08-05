import React from 'react';

function Posts({ posts }) {
  return (
    <div className="posts">
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.title}</h3>
            {post.image && (
              <div className="image-card">
                <img src={post.image} alt="Post" className="image" />
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Posts;
