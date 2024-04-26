import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllSpot from './../pages/AllSpot';
import AddSpot from "../pages/AddSpot";
import MyList from './../pages/MyList';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/allSpot',
                element:<AllSpot/>
            },
            {
                path:'/addSpot',
                element:<AddSpot/>
            },
            {
                path:'/myList',
                element:<MyList/>
            },
        ]
    },
]);

export default router