import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/WeatherDashboard";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;
