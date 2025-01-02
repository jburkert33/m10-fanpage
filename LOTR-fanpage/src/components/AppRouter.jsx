import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "/src/App";
import NotFound from "./NotFound";
import Landing from "./Landing";
import AgentList from "./AgentList";
import ConfirmDelete from "./ConfirmDelete";
import AgentForm from "./AgentForm";
import ErrorPage from "./ErrorPage";


function AppRouter() {
  const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "agents",
          element: <AgentList />,
          children: [
              {
                path: "delete/:id",
                element: <ConfirmDelete />,
              },
              {
                path: "add",
                element: <AgentForm />,
              },
              {
                path: "edit/:id",
                element: <AgentForm />,
              }
          ]
        },
        {
          path: "/error",
          element: <ErrorPage />,
        }
      ]
    }
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default AppRouter;