import React, { useState } from "react";
import axios from "axios";

const CreatePost = ({ token }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/posts",
        { text },
        { headers: { "x-auth-token": token } }
      );
      setText("");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default CreatePost;
