// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LocalPosts from './pages/LocalPosts';
import GlobalPosts from './pages/GlobalPosts';
import Profile from './pages/Profile';
import QnAForumPage from './pages/QnAForumPage';
import Events from './pages/Events';
import Chat from './pages/Chat';
import CreatePost from './pages/CreatePost'; // New CreatePost page

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Main Application Routes */}
        <Route path="/local-posts" element={<LocalPosts />} />
        <Route path="/global-posts" element={<GlobalPosts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/qna" element={<QnAForumPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/create-post" element={<CreatePost />} /> {/* New Route */}

        {/* Fallback Route for Undefined Paths */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
