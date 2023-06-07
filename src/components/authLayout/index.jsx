import React, { useEffect } from 'react';
import { Navigate, useOutlet } from 'react-router-dom';

const AuthLayout = () => {
  const outlet = useOutlet();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user?.token) {
      return <Navigate to="/profile" replace />;
    }
  }, []);

  return <>{outlet}</>;
};

export default AuthLayout;
