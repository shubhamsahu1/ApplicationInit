import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import UserManagement from '../pages/UserManagement';
import ChangePassword from '../pages/ChangePassword';
import Profile from '../pages/Profile';
import { ProtectedRoute, AdminRoute, PublicRoute } from '../components/ProtectedRoute/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      
      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/change-password"
        element={
          <ProtectedRoute>
            <Layout>
              <ChangePassword />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Layout>
              <Profile />
            </Layout>
          </ProtectedRoute>
        }
      />
      
      {/* Admin Only Routes */}
      <Route
        path="/user-management"
        element={
          <AdminRoute>
            <Layout>
              <UserManagement />
            </Layout>
          </AdminRoute>
        }
      />
      
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      
      {/* Catch all - redirect to dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes; 