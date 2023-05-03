import { Landing, Profile, UnAuth } from "../screens";

const protectedRoute = [
  {
    path: "/profile",
    component: Profile,
  },
];

const unProtectedRoute = [
  {
    path: "/home",
    component: Landing,
  },
  {
    path: "/not-auth",
    component: UnAuth,
  },
  {
    path: "*",
    component: Landing,
  },
];

export { protectedRoute, unProtectedRoute };
