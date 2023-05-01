import { Landing, Profile, UnAuth } from "../screens";

const protectedRoute = [
  {
    path: "/profile",
    component: Profile,
  },
];

const unProtectedRoute = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/not-auth",
    component: UnAuth,
  },
];

export { protectedRoute, unProtectedRoute };
