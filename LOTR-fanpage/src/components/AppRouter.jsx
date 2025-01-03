import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "/src/App";
import NotFound from "./NotFound";
import CharacterList from "./characterList";
import CharacterPage from "./CharacterPage";


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
          path: "/characters/1",
          element: <CharacterPage id="1" />,
        },
        {
          path: "/characters/2",
          element: <CharacterPage id="2" />,
        },
        {
          path: "/characters/3",
          element: <CharacterPage id="3" />,
        },
        {
          path: "/characters/4",
          element: <CharacterPage id="4" />,
        },
        {
          path: "/characters/5",
          element: <CharacterPage id="5" />,
        },
        {
          path: "/characters/6",
          element: <CharacterPage id="6" />,
        },
        {
          path: "/characters/7",
          element: <CharacterPage id="7" />,
        },
        {
          path: "/characters/8",
          element: <CharacterPage id="8" />,
        },
        {
          path: "/characters/9",
          element: <CharacterPage id="9" />,
        },
        {
          path: "/characters/10",
          element: <CharacterPage id="10" />,
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