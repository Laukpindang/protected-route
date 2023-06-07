import React, { Suspense, useEffect } from 'react';
import { useOutlet, useLocation, useNavigate, useLoaderData, Await } from 'react-router-dom';
import { AuthProvider } from '../../hooks/useAuth';

const MainLayout = () => {
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();

  const { userPromise } = useLoaderData();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location, navigate]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Await
        resolve={userPromise}
        errorElement={() => alert('Something wrong')}
        children={(user) => <AuthProvider userData={user}>{outlet}</AuthProvider>}
      />
    </Suspense>
  );
};

export default MainLayout;
