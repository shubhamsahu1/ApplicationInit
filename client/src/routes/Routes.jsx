import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import UserManagement from '../pages/UserManagement';
import ChangePassword from '../pages/ChangePassword';
import Profile from '../pages/Profile';
import { ProtectedRoute, AdminRoute, PublicRoute } from '../components/ProtectedRoute/ProtectedRoute';
import { USER_ROLES } from '../utils/shared-constants';

// Route configuration object
export const routes = [
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "user-management",
        element: (
          <ProtectedRoute role={USER_ROLES.ADMIN}>
            <UserManagement />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

// Create the router instance
const router = createBrowserRouter(routes);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes; 