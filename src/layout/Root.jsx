import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
    const [darkMode,setDarkMode]=useState(false)
    // console.log(darkMode?"true":"false")
    return (
        <div className="dark">
            <Navbar setDarkMode={setDarkMode} darkMode={darkMode}></Navbar>
            <h1>I am root</h1>
        </div>
    );
};

export default Root;