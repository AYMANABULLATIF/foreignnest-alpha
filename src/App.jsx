// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Communities from './pages/Communities';
import CommunityManagement from './pages/CommunityManagement';
import CommunityTab from './components/CommunityTab';
import PostDetail from './pages/PostDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Local from './pages/Local';
import Global from './pages/Global';
import Events from './pages/Events';
import Places from './pages/Places';
import Chat from './pages/Chat';
import QnA from './pages/QnA';
import { CommunityProvider } from './context/CommunityContext';

function App() {
  return (
    <CommunityProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/community-management" element={<CommunityManagement />} />
          <Route path="/community-tab" element={<CommunityTab />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/local" element={<Local />} />
          <Route path="/global" element={<Global />} />
          <Route path="/events" element={<Events />} />
          <Route path="/places" element={<Places />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/qna" element={<QnA />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </CommunityProvider>
  );
}

export default App;
