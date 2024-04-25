import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    const [darkMode,setDarkMode]=useState(false)
    console.log(darkMode)
    return (
        <div className={`${darkMode ? "dark" : ""} bg-white dark:bg-[#1d232a] h-screen bg-no-repeat bg-cover`}>
            <Navbar setDarkMode={setDarkMode} darkMode={darkMode}></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;