import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Landing from "./Landing";
import App from "/src/App";
import Movies from "./Films";
import Books from "./Books";



function AppRouter() {
    const routes = [
        {
            path: "/",
            element: <Landing />,
            children: [
                {
                    path: "/",
                    element: <Landing />,
                },
                {
                    path: "films",
                    element: <Movies />,
                },
                {
                    path: "books",
                    element: <Books />
                }
            ]
        }
    ];

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
}

export default AppRouter;