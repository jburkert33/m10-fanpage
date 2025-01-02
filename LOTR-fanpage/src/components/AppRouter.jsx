import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "/src/App";
import ErrorPage from "./ErrorPage"; // Corrected import path
import Landing from "./Landing"; // Corrected import path

function AppRouter() {
  const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default AppRouter;