import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import "./index.css";

function DashBoard() {
  const [posts, setPosts] = useState([{title:"This is the Post Title", description:"this is the description"}, {title:"This is the Post Title", description:"this is the description"}]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCreatePost = () => {
    setShowInput(true);
  };

  const handleSubmitPost = () => {
    const newPost = { title, description };
    setPosts([...posts, newPost]);
    setTitle('');
    setDescription('');
    setShowInput(false);
  };

  return (
    <div className='Nav' style={{ backgroundColor: "black", color: "white", padding: "40px" }}>
      <div className='leftNav'>
        <button>All Post</button>
        <button>Commented Post</button>
        <button>Replied Post</button>
        <br />
        {!showInput && (
          <button onClick={handleCreatePost}><CiCirclePlus /> Create Post</button>
        )}
      </div>

      {showInput && (
        <div className="post-inputs">
          <input type="text" placeholder="Enter post title" value={title} onChange={handleTitleChange} />
          <textarea placeholder="Enter post description" value={description} onChange={handleDescriptionChange} />
          <button onClick={handleSubmitPost}>Submit</button>
        </div>
      )}

      <div>
        <h3>All Post</h3>
        {posts.map((post, index) => (
          <div className="post-container" ke1y={index}>
            <h4 className="post-title">{post.title}</h4>
            <p className="post-description">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
