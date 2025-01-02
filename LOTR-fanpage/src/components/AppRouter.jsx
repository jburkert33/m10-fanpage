import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "/src/App";
import NotFound from "./NotFound";
import CharacterList from "./characterList";


function AppRouter() {
  const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <CharacterList />,
        },
        {
          path: "/characters",
          element: <CharacterList />,
        },
        {
          path: "/error",
          element: <CharacterList />,
        }
      ]
    }
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default AppRouter;