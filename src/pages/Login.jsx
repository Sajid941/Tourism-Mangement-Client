import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/login.css'
import { FaEye, FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const { logIn, logInWithGoogle, logInWithGithub } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location, navigate)
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'Log In',
                    text: 'Log In successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate(location.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    title: 'Log In Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }
    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'Log In',
                    text: 'Log In successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate(location.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    title: 'Log In Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })

    }
    const handleGitHubLogin = () => {
        logInWithGithub()
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'Log In',
                    text: 'Log In successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate(location.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    title: 'Log In Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })

    }
    return (
        <div className=''>
            <section className="md:flex flex-wrap justify-center items-center gap-1 my-10 hidden">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>

                {/* Login form */}
                <div className='bg-white/30 absolute backdrop-blur-sm bg-opacity-30 border border-white/30 p-8 text-center rounded-xl space-y-3'>
                    <h1 className="text-4xl font-bold text-white hover:text-[#00fd00]">Login Here</h1>
                    <div className='border-b-2 space-y-3 pb-5 '>
                        <button onClick={handleGoogleLogin} className='btn w-full bg-white text-[#3d3d3d] hover:text-white border-none'><FaGoogle size={20} /> Login with Google</button>
                        <button onClick={handleGitHubLogin} className='btn w-full bg-white text-[#3d3d3d] hover:text-white border-none'><FaGithub size={20} />Login with Github</button>
                    </div>
                    <form onSubmit={handleLogin} className="p-4 ">
                        <div className="w-full">
                            <label className="label">
                                <a className="label-text text-white">Email</a>
                            </label>
                            <input type="email" name='email' autoComplete='current-email' placeholder="email" className="input input-bordered w-full bg-white" required />
                        </div>
                        <div className="">
                            <label className="label">
                                <a className="label-text text-white">Password</a>
                            </label>
                            <input type="password" name='password' autoComplete='current-password' placeholder="password" className="input input-bordered w-full bg-white" required /><a className="relative bottom-9 right-2 float-end"><FaEye size={20} /></a>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white ">Forgot password?</a>
                            </label>
                        </div>
                        <div className="mt-6">
                            <button className="btn bg-green-600 text-white border-none w-full">Login</button>

                        </div>
                        <p className='text-white mt-2'>Don,t have a account? <Link to={'/register'} className='hover:underline hover:text-blue-600'>Register</Link></p>
                    </form>
                </div>
            </section>

            {/* Login form for small device */}
            <div className='pt-24 mb-10 px-4'>
                <div className='md:hidden  dark:bg-darkPrimary  p-5 text-center rounded-xl dark:border-white border-black border space-y-3'>
                    <h1 className="text-4xl font-bold dark:text-white text-darkPrimary hover:text-[#00fd00]">Login Here</h1>
                    <div className='border-b-2 space-y-3 pb-5 '>
                        <button onClick={handleGoogleLogin} className='btn w-full bg-white text-[#3d3d3d] hover:text-white border-none'><FaGoogle size={20} /> Login with Google</button>
                        <button onClick={handleGitHubLogin} className='btn w-full bg-white text-[#3d3d3d] hover:text-white border-none'><FaGithub size={20} />Login with Github</button>
                    </div>
                    <form onSubmit={handleLogin} className="p-4 ">
                        <div className="w-full">
                            <label className="label">
                                <a className="label-text dark:text-white text-darkPrimary">Email</a>
                            </label>
                            <input type="email" placeholder="email" autoComplete='current-email' className="input input-bordered w-full bg-white border border-blackText" required />
                        </div>
                        <div className="">
                            <label className="label">
                                <a className="label-text dark:text-white text-darkPrimary">Password</a>
                            </label>
                            <input type="password" placeholder="password" autoComplete='current-password' className="input input-bordered w-full bg-white  border-blackText" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover dark:text-white text-darkPrimary ">Forgot password?</a><a className="relative bottom-9 right-2 float-end"><FaEye size={20} /></a>
                            </label>
                        </div>
                        <div className="mt-6">
                            <button className="btn bg-green-600 dark:text-white text-darkPrimary border-none w-full">Login</button>

                        </div>
                        <p className='dark:text-white text-darkPrimary mt-2'>Don,t have a account? <Link to={'/register'} className='hover:underline hover:text-blue-600'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;