
import Layout from "layout";
import Home from "pages/home";
import type { RouteObject } from "react-router";
import { useRoutes } from "react-router-dom";
import Login from "../pages/login";
import WrapperRouteComponent from "./WrapperRouteComponent";
const routeList: RouteObject[] = [
  {
    path: "/",
    element: <WrapperRouteComponent element={<Layout />} />,
    children: [
      {
        path: "/",
        element: <WrapperRouteComponent element={<Home />} />,
      },
      {
        path: "/login",
        element: <WrapperRouteComponent element={<Login />} />,
      },
    ],
  },
];
const RenderRouter = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
