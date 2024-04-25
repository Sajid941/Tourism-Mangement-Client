import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            }
        ]
    },
]);

export default router