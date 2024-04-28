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
import ErrorPage from "../pages/ErrorPage";
import ContactUs from "../pages/ContactUs";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<HomePage/>,
                loader:()=>fetch('http://localhost:3000/touristSpots')
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
                element:<PrivateRoute> <AddSpot/> </PrivateRoute>
            },
            {
                path:'/myList',
                element:<MyList/>
            },
            {
                path:'/contactUs',
                element:<ContactUs/>
            }
        ]
    },
]);

export default router