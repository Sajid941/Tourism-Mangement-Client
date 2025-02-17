import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Tooltip } from 'react-tooltip'
const Navbar = ({ darkMode, setDarkMode }) => {
    const { user, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Log Out',
                    text: 'Log out successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            })
            .catch(error => {
                Swal.fire({
                    title: 'LogOutError!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }

    const navLink = <>
        <li><NavLink className={"pb-2 hover:text-green-600"} to={'/'}>Home</NavLink></li>
        <li><NavLink className={"pb-2 hover:text-green-600"} to={'/allSpot'}>All Tourists Spot</NavLink></li>
        {
            user &&
            <li><NavLink className={"pb-2 hover:text-green-600"} to={'/addSpot'}>Add Tourists Spot</NavLink></li>

        }
        {
            user &&
            <li><NavLink className={"pb-2 hover:text-green-600"} to={'/myList'}>My List</NavLink></li>

        }
        <li><NavLink className={"pb-2 hover:text-green-600"} to={'/contactUs'}>ContactUs</NavLink></li>
    </>
    return (
        <div className="navbar bg-white/30 backdrop-blur-lg bg-opacity-30 dark:bg-darkPrimary dark:text-white text-[#181818] shadow-lg md:px-10  fixed z-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="space-y-4 p-4 menu-sm dropdown-content mt-3 z-[1]  shadow  rounded-box w-52 bg-white dark:bg-darkPrimary">
                        <a className="text-center ml-8 font-bold text-green-600 ">WayWise</a>

                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-green-600 hidden md:block">WayWise</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-6 ">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <label className="cursor-pointer grid place-items-center ">
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input onChange={() => setDarkMode(!darkMode)} type="checkbox" className="theme-controller" value="synthwave" />

                        {/* sun icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </label>
                {

                }
                {
                    user ?
                        user && <div id="user-image" data-tooltip-variant="light" className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                            <Tooltip anchorSelect="#user-image" clickable>
                                {user.displayName} <br />
                                <button onClick={handleLogOut} className="btn bg-white mt-3">Log out</button>
                            </Tooltip>
                        </div> :
                        <span className="space-x-3 flex">
                            <Link to={'/login'} className="btn bg-green-600 text-white border-none h">Login</Link>
                            <Link to={'/register'} className="btn bg-[#4267b2] text-white border-none h">Register</Link>

                        </span>
                }
            </div>
        </div>
    );
};

export default Navbar;