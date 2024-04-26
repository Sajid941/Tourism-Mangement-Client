import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Root = () => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div className={`${darkMode ? "dark" : ""} bg-white dark:bg-darkPrimary`}>
            <div className="h-16">
                <Navbar setDarkMode={setDarkMode} darkMode={darkMode}></Navbar>

            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;