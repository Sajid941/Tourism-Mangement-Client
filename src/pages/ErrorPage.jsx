import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import notFound from "../assets/Not_Found.json"
import { Typewriter } from 'react-simple-typewriter'
import { Fade } from 'react-awesome-reveal';

const ErrorPage = () => {
    return (
        <div>
            <div className='text-center text-3xl md:text-4xl font-bold dark:text-white mt-20'>
                <Typewriter words={["Something,s missing."]}></Typewriter>
            </div>
            <section className="bg-white dark:bg-gray-900">
                <div className="px-4 mx-auto max-w-screen-xl mt-5 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <Lottie className='mb-10' animationData={notFound}></Lottie>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400"><Fade>
                            Sorry, we can,t find that page. You,ll find lots to explore on the home page.</Fade></p>
                        <Link to={"/"} className="btn bg-green-600 text-white border-none">Back to Homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;