import { createContext, useContext, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCookie } from './useCookie.js';

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
  const [user, setUser] = useCookie('user', userData);

  const userState = useSelector((state) => state.user);

  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    navigate('/management-product', { replace: true });
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    alert('success logout');
    navigate('/sign-in', { replace: true });
  };

  useEffect(() => {
    setUser({ ...user, ...userState.user });
  }, [userState.user]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, userState.user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
