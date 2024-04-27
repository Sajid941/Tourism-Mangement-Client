import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard/TouristSpotCard";

const HomePage = () => {
    const touristSpots = useLoaderData()
    return (
        <div className="lg:w-[1250px] snap-none mx-auto">
            <div className="carousel my-10 ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <div className="grid grid-cols-2  items-center  px-10 lg:px-32">
                        <div className="space-y-4">
                            <h1 className="text-xl md:text-6xl font-extrabold col-span-1"><span className="text-blackText dark:text-white">Bandarban, </span> <span className="bg-gradient-to-r from-green-500 via-red-500 to-green-500 text-transparent bg-clip-text">Bangladesh</span></h1>
                            <button className="btn-xs md:btn rounded-lg bg-green-600 text-white border-none dark:hover:bg-white dark:hover:text-blackText">Explore More</button>
                        </div>
                        <img src="https://ttg.com.bd/uploads/tours/plans/204_36376273530_3c9a0335f5_b-copyjpg.jpg" className="w-full rounded-xl" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5  top-1/2">
                        <a href="#slide3" className="border-2 flex justify-center items-center rounded-full border-gray-400 text-gray-400 dark:hover:border-white hover:border-black dark:hover:text-white hover:text-black transition duration-700 w-8 md:w-12 h-8 md:h-12"><FaArrowLeft></FaArrowLeft></a>
                        <a href="#slide2" className="border-2 flex justify-center items-center rounded-full border-gray-400 text-gray-400 dark:hover:border-white hover:border-black dark:hover:text-white hover:text-black transition duration-700 w-8 md:w-12 h-8 md:h-12"><FaArrowRight></FaArrowRight></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="grid grid-cols-2  items-center px-10 lg:px-32">
                        <div className="space-y-4">
                            <h1 className="text-xl md:text-6xl font-extrabold col-span-1"><span className="text-blackText dark:text-white">Chiang Ma,</span><span className="bg-gradient-to-r from-red-400 via-blue-900 to-red-400 text-transparent bg-clip-text">Thailand</span></h1>
                            <button className="btn-xs md:btn rounded-lg bg-green-600 text-white border-none dark:hover:bg-white dark:hover:text-blackText">Explore More</button>
                        </div>
                        <img src="https://cdn.britannica.com/07/192407-050-548620BE/Sunset-view-Chiang-Mai-Thailand.jpg" className="w-full rounded-xl" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5  top-1/2">
                        <a href="#slide1" className="border-2 flex justify-center items-center rounded-full border-gray-400 text-gray-400 dark:hover:border-white hover:border-black dark:hover:text-white hover:text-black transition duration-700 w-8 md:w-12 h-8 md:h-12"><FaArrowLeft></FaArrowLeft></a>
                        <a href="#slide3" className="border-2 flex justify-center items-center rounded-full border-gray-400 text-gray-400 dark:hover:border-white hover:border-black dark:hover:text-white hover:text-black transition duration-700 w-8 md:w-12 h-8 md:h-12"><FaArrowRight></FaArrowRight></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="grid grid-cols-2  items-center px-10 lg:px-32">
                        <div className="space-y-4">
                            <h1 className="text-xl md:text-6xl font-extrabold col-span-1"><span className="text-blackText dark:text-white">Ha Long Bay,</span><span className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 text-transparent bg-clip-text">Vietnam</span></h1>
                            <button className="btn-xs md:btn rounded-lg bg-green-600 text-white border-none dark:hover:bg-white dark:hover:text-blackText">Explore More</button>
                        </div>
                        <img src="https://statics.vinpearl.com/ha-long-bay-in-vietnam-1_1689180838.jpg" className="w-full rounded-xl" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5  top-1/2">
                        <a href="#slide2" className="border-2 flex justify-center items-center rounded-full border-gray-400 text-gray-400 dark:hover:border-white hover:border-black dark:hover:text-white hover:text-black transition duration-700 w-8 md:w-12 h-8 md:h-12"><FaArrowLeft></FaArrowLeft></a>
                        <a href="#slide1" className="border-2 flex justify-center items-center rounded-full border-gray-400 text-gray-400 dark:hover:border-white hover:border-black dark:hover:text-white hover:text-black transition duration-700 w-8 md:w-12 h-8 md:h-12"><FaArrowRight></FaArrowRight></a>
                    </div>
                </div>

            </div>
            <div >
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">Tourists Spot</h1>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 p-5 ld:p-0 gap-6">
                    {
                        touristSpots.map((touristSpot, idx) => <TouristSpotCard key={idx} touristSpot={touristSpot}></TouristSpotCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;