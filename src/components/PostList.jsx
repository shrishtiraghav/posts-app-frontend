import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = ({ token }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts", {
          headers: { "x-auth-token": token },
        });
        setPosts(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchPosts();
  }, [token]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.text}</h3>
          <p>Likes: {post.likes.length}</p>
          <p>Comments: {post.comments.length}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
