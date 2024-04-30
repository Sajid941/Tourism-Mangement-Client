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
import CountriesSpots from "../pages/CountriesSpots";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                loader: () => fetch('https://a10-tourism-management-server.vercel.app/touristSpots')
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
                loader: () => fetch('https://a10-tourism-management-server.vercel.app/touristSpots')
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
                loader:({params})=>fetch(`https://a10-tourism-management-server.vercel.app/touristSpots/${params.id}`)
            },
            {
                path:'/updatePage/:id',
                element:<PrivateRoute> <UpdatePage/> </PrivateRoute>,
                loader:({params})=>fetch(`https://a10-tourism-management-server.vercel.app/touristSpots/${params.id}`)
            },
            {
                path:'/countriesSpots/:countries',
                element:<CountriesSpots></CountriesSpots>,
                loader:({params}) => fetch(`https://a10-tourism-management-server.vercel.app/countriesTouristSpot/${params.countries}`)
            }
        ]
    },
]);

export default router