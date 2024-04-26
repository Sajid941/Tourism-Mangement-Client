import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const photoUrl=form.photoUrl.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,photoUrl,email,password)
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
                        <input type="text" name='photoUrl' placeholder="Photo URL" className="input input-bordered w-full bg-white" required />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <a className="label-text text-white">Email</a>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered w-full bg-white" required />
                    </div>
                    <div className="">
                        <label className="label">
                            <a className="label-text text-white">Password</a>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered w-full bg-white"  required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-white ">Forgot password?</a>
                        </label>
                    </div>
                    <div className="mt-6">
                        <button className="btn bg-green-600 text-white border-none w-full">Login</button>

                    </div>
                    <p className='text-white mt-2'>Already have a account? <Link to={'/login'} className='hover:underline hover:text-blue-600'>Register</Link></p>
                </form>
            </div>
            <img className="col-span-2" src="https://i.postimg.cc/xC8QK5Lh/undraw-welcome-cats-thqn-removebg-preview.png" alt="" />
        </div>
    );
};

export default Register;