import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const Register = () => {
    const {createUser}=useAuth()
    const handleRegister=e=>{
        e.preventDefault()
        const form=e.target;
        const displayName=form.name.value;
        const photoURL=form.photoUrl.value;
        const email=form.email.value;
        const password=form.password.value;
        if(!/[A-Z]/.test(password)){
            return toast.error('Must have an Uppercase letter in your password')
        }
        else if(!/[a-z]/.test(password)){
            return toast.error('Must have an Lowercase letter in  your password')
        }
        else if(password.length < 6){
            return toast.error('You should have 6 character in your password')
        }
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            updateProfile(result.user,{displayName,photoURL})
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <div className="my-10 p-5 md:px-10 lg:pl-32 md:mx-20 lg:grid lg:grid-cols-3 justify-center items-center bg-[url('https://i.postimg.cc/ZY67w3jM/Moon.jpg')] h-screen rounded-xl">
            {/* Register form */}
            <div className=' bg-white h-fit backdrop-blur-lg bg-opacity-15 border border-white/30 py-5 text-center rounded-xl space-y-3'>
                <h1 className="text-4xl font-bold text-white hover:text-[#00fd00]">Register Here</h1>
                <form onSubmit={handleRegister} className="p-4 ">
                    <div className="w-full">
                        <label className="label">
                            <a className="label-text text-white">Name</a>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered w-full bg-white" required />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <a className="label-text text-white">Photo</a>
                        </label>
                        <input type="text" name='photoUrl' placeholder="Photo URL"  className="input input-bordered w-full bg-white" required />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <a className="label-text text-white">Email</a>
                        </label>
                        <input type="email" name='email' placeholder="email" autoComplete="current-email" className="input input-bordered w-full bg-white" required />
                    </div>
                    <div className="">
                        <label className="label">
                            <a className="label-text text-white">Password</a>
                        </label>
                        <input type="password" name='password' placeholder="password" autoComplete="current-password" className="input input-bordered w-full bg-white"  required />
                    </div>
                    <div className="mt-6">
                        <input type="submit" value="Register" className="btn bg-green-600 text-white border-none w-full"/>
                    </div>
                    <p className='text-white mt-2'>Already have a account? <Link to={'/login'} className='hover:underline hover:text-blue-600'>Login</Link></p>
                </form>
            </div>
            <img className="col-span-2" src="https://i.postimg.cc/xC8QK5Lh/undraw-welcome-cats-thqn-removebg-preview.png" alt="" />
        </div>
    );
};

export default Register;