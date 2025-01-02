import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Landing from "./Landing";
import App from "/src/App";
import Films from "./Films";
import Books from "./Books";



function AppRouter() {
    const routes = [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Landing />,
                },
                {
                    path: "/films",
                    element: <Films />,
                },
                {
                    path: "/books",
                    element: <Books />
                }
            ]
        }
    ];

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
}

export default AppRouter;