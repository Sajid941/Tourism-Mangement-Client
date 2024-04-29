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
import ViewDetails from "../pages/ViewDetails";
import UpdatePage from "../pages/UpdatePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                loader: () => fetch('http://localhost:3000/touristSpots')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/allSpot',
                element: <AllSpot />,
                loader: () => fetch('http://localhost:3000/touristSpots')
            },
            {
                path: '/addSpot',
                element: <PrivateRoute> <AddSpot /> </PrivateRoute>
            },
            {
                path: '/myList',
                element: <PrivateRoute><MyList /></PrivateRoute>,
            },
            {
                path: '/contactUs',
                element: <ContactUs />
            },
            {
                path: '/viewDetails/:id',
                element: <PrivateRoute><ViewDetails/></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:3000/touristSpots/${params.id}`)
            },
            {
                path:'/updatePage/:id',
                element:<PrivateRoute> <UpdatePage/> </PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:3000/touristSpots/${params.id}`)
            }
        ]
    },
]);

export default router