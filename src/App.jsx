import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const setTokenAndStore = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  return (
    <div className="App">
      {!token ? (
        <Routes>
          <Route
            path="/login"
            element={<Login setToken={setTokenAndStore} />}
          />
          <Route
            path="/register"
            element={<Register setToken={setTokenAndStore} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/posts" element={<CreatePost token={token} />} />
          <Route path="/" element={<PostList token={token} />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
