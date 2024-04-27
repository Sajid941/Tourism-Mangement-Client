import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <img src="https://i.postimg.cc/s1d3bP9T/undraw-Page-not-found-re-e9o6.png" alt="" />
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something,s missing.</p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can,t find that page. You,ll find lots to explore on the home page.</p>
                        <Link to={"/"} className="btn bg-green-600 text-white border-none">Back to Homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;