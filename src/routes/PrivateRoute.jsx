import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { loading, user } = useAuth()
    const location = useLocation()
    if (loading) {
        return <div className="flex justify-center h-screen md:h-[470px] border-4 items-center">
            <span className="loading loading-spinner text-success"></span>
        </div>

    }
    else if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;