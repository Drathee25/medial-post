import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Post({ addPost }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    let imageUrl = '';
  
    if (image) {
      const formData = new FormData();
      formData.append('image', image);
  
      try {
        const response = await axios.post('https://server-yzbe.onrender.com/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        imageUrl = response.data.imageUrl;
      } catch (error) {
        console.error('Error uploading image:', error);
        return;
      }
    }
  
    const newPost = {
      title,
      image: imageUrl
    };
  
    addPost(newPost);
    navigate('/posts');
  };
  

  return (
    <div className="post">
      <h2>Create a Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="file" onChange={handleImageChange} />
      {image && <img src={URL.createObjectURL(image)} alt="Post" />}
      <button onClick={handleSubmit}>Submit Post</button>
    </div>
  );
}

export default Post;
