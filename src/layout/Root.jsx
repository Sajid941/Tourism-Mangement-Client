import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'

const Root = () => {
    const localDarkMode = JSON.parse(localStorage.getItem("localDarkMode"));

    const [darkMode, setDarkMode] = useState(localDarkMode)
    useEffect(() => {
        localStorage.setItem("localDarkMode", (darkMode))
    }, [darkMode])
    return (
        <div className={`${darkMode ? "dark" : ""} bg-white dark:bg-darkPrimary`}>
            <div className="h-16">
                <Navbar setDarkMode={setDarkMode} darkMode={darkMode}></Navbar>

            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;