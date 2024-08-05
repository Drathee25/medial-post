const BASE_URL = process.env.REACT_APP_API_URL; // Make sure this is set correctly

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
                <img 
                  src={`https://server-yzbe.onrender.com/${post.image}`} 
                  alt={post.title} 
                  className="image" 
                />
                console.log(post.image);
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Posts;
