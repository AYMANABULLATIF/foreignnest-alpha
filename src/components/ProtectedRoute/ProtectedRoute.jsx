// src/components/ProtectedRoute.jsx
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default ProtectedRoute;
