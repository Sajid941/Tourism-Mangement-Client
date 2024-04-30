import { FaRegHeart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Lottie from "lottie-react";
import notAvailable from "../assets/Not_Available.json"

const CountriesSpots = () => {
    const touristSpots = useLoaderData()
    return (
        <div>
            {
                touristSpots.length ?
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-[1250px] mx-auto my-10 p-5 lg:p-0">
                        {
                            touristSpots.map(touristSpot =>
                                <div key={touristSpot?._id} className="card card-compact dark:border dark:border-[#757575] shadow-xl">
                                    <figure>
                                        <img src={touristSpot?.image} className="w-full md:h-[225px] " alt="Shoes" />
                                        <div className="w-10 h-10 absolute top-4 right-4 ">
                                            <div className="w-full h-full absolute hover:bg-gray-600 rounded-full animate-ping">

                                            </div>
                                            <div className="w-full h-full flex  relative justify-center items-center bg-gray-800 rounded-full text-white hover:text-pink-700 transition duration-700 ">
                                                <FaRegHeart size={20} />
                                            </div>
                                        </div>
                                    </figure>
                                    <div className="card-body text-blackText dark:text-white">
                                        <h2 className="card-title md:text-2xl">{touristSpot?.spot_name}</h2>
                                        <p className="text-[16px]"><span className="font-bold">Location:</span> {touristSpot?.location}, {touristSpot?.country_name}</p>
                                        <p className="text-[#757575]">{touristSpot?.short_description}</p>
                                        <div className="flex bg-[#7dd3fc] p-2 rounded-lg bg-opacity-70  text-blackText dark:text-white text-center">
                                            <p>{touristSpot?.seasonality}</p>
                                            <p><span>Average Cost</span> {touristSpot?.average_cost} TK</p>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <Link to={`/viewDetails/${touristSpot?._id}`} className="btn mt-3 w-full hover:bg-[#0284c7] bg-[#478dc9] text-white border-none">View Details</Link>
                                        </div>
                                    </div>
                                </div>)

                        }
                    </div>:
                    <div className="flex justify-center items-center ">
                        <Lottie className="w-96" animationData={notAvailable}></Lottie>
                        <p className="text-3xl font-bold text-blackText dark:text-white">Sorry, This Country Spots Not Available Now</p>
                    </div>
            }
        </div>
    );
};

export default CountriesSpots;