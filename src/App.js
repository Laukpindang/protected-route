import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
  defer,
} from 'react-router-dom';
import { protectedRoute, unProtectedRoute } from './routes';
import { MainLayout, AuthenticatedLayout, AuthLayout } from './components';
import { Cookie } from './helper';
import { Result, Button } from 'antd';

const getUserData = () =>
  new Promise((resolve) => {
    const user = Cookie.getCookie('user');
    if (!user?.token) {
      // to enable animation
      setTimeout(() => {
        resolve(null);
      }, 3000);
    } else {
      resolve(user);
    }
  });

const NotFoundPage = () => {
  const navigate = useNavigate();
  const onClickBackHome = () => {
    navigate('/');
  };
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" onClick={onClickBackHome}>
          Back Home
        </Button>
      }
    />
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<MainLayout />}
      loader={async () => defer({ userPromise: getUserData() })}
      errorElement={<NotFoundPage />}>
      <Route element={<AuthLayout />}>
        {unProtectedRoute.map((res, i) => (
          <Route key={i} path={res?.path} element={<res.component />} />
        ))}
      </Route>

      <Route element={<AuthenticatedLayout />}>
        {protectedRoute.map((res, i) => (
          <Route key={i} path={res?.path} element={<res.component />} />
        ))}
      </Route>
    </Route>
  )
);
