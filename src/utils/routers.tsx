import { createBrowserRouter } from "react-router-dom";
import { HomePage, StorePage } from "../pages/index";
import { SignIn } from "@clerk/clerk-react";
import Profile from "../pages/about/page";

export const routes = [
  {
    name: "Home",
    path: "/",
    element: <HomePage />,
  },
  {
    name: "signIn",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Store",
    path: "/store",
    element: <StorePage />,
  },
  {
    name: "Profile",
    path: "/profile",
    element: <Profile />,
  },
];
const routers = createBrowserRouter(routes);

export default routers;
