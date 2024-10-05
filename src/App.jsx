import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Profile from './pages/Profile/Profile';
import PostDetail from './pages/PostDetail/PostDetail';
import Community from './pages/Community/Community';
import Events from './pages/Events/Events';
import Search from './pages/Search/Search.jsx';
import QnA from './pages/QnA/QnA';
import Chat from './pages/Chat/Chat';
import Places from './pages/Places/Places';
import Feed from './pages/Feed/Feed';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/search" element={<Search />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/places/:id" element={<Places />} /> {/* Dynamic Route */}
          <Route path="/places" element={<Places />} /> {/* Main Places Page */}
          <Route path="/feed" element={<Feed />} /> {/* Feed Page */}
          {/* Add more routes as needed */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
