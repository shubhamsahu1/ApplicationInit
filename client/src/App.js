import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import AppRoutes from './routes/Routes';

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App; 