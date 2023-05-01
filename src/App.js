import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { protectedRoute, unProtectedRoute } from "./routes";
import { MainLayout, FreeLayout, AuthLayout } from "./components";

const NotFoundPage = () => {
  <h1>Error 404 not Founf</h1>;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />} errorElement={<NotFoundPage />}>
      <Route element={<FreeLayout />}>
        {unProtectedRoute.map((res, i) => (
          <Route key={i} path={res?.path} element={<res.component />} />
        ))}
      </Route>

      <Route element={<AuthLayout />}>
        {protectedRoute.map((res, i) => (
          <Route key={i} path={res?.path} element={<res.component />} />
        ))}
      </Route>
    </Route>
  )
);
