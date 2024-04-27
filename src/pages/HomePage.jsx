import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard/TouristSpotCard";

const HomePage = () => {
    const touristSpots = useLoaderData()
    return (
        <div className="lg:w-[1250px] snap-none mx-auto">
            {/* banner section */}
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
            {/* Tourist spot section */}
            <div >
                <div className="text-center px-5 space-y-3 mt-10 mb-5 lg:px-48">
                    <h1 className="text-2xl md:text-4xl font-bold text-blackText dark:text-white">Tourists Spot</h1>
                    <p className="text-[#757575]">With its beauty and variety of activities, Guring Fering promises an unforgettable experience for visitors of all ages. Come discover the magic of Guring Fering and create memories that will last a lifetime!</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 p-5  lg:p-0 gap-6">
                    {
                        touristSpots.map((touristSpot, idx) => <TouristSpotCard key={idx} touristSpot={touristSpot}></TouristSpotCard>)
                    }
                </div>
            </div>
            {/* Testimonial section */}
            <div>
                <div className="text-center px-5 space-y-3 md:mt-20 mb-5 lg:px-48">
                    <h1 className="text-2xl md:text-4xl text-blackText dark:text-white font-bold">Traveler Testimonial</h1>
                    <p className="text-[#757575]">This header invites visitors to explore testimonials from others who have experienced the beauty and charm of Guring Firing, offering insights and inspiration for their own visit.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 p-5 md:p-0 gap-6 md:mb-20">
                    {/* Testimonial -01 */}
                    <div >
                        <div className="bg-[#f4f4f4] dark:bg-[#1d232a] dark:border dark:border-white h-64 rounded-xl p-5 md:p-10">
                            <p className="text-blackText dark:text-white">
                                Guring Firing is a hidden gem along the Australian coast! The beach is pristine, the hiking trails offer breathtaking views, and the historic sites give you a taste of the area,s rich heritage. A must-visit for anyone looking for a unique coastal experience.
                            </p>
                        </div>
                        <div className="avatar relative bottom-6 left-14">
                            <div className="w-12 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="rating w-20 top-3">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                        </div>
                        <div className="ml-12 mt-2">
                            <p className="text-2xl font-bold text-blackText dark:text-white">Mrs. Sarah</p>
                            <p className="text-[#757575]">Traveler</p>
                        </div>
                    </div>

                    {/* Testimonial -02 */}
                    <div>
                        <div className="bg-[#f4f4f4] dark:bg-[#1d232a] dark:border dark:border-white h-64  rounded-xl p-5 md:p-10">
                            <p className="text-blackText dark:text-white">
                                I fell in love with Guring Firing the moment I set foot on its sandy shores. The rock pools are teeming with life, the sunsets are spectacular, and the sound of the waves is so soothing. It,s like stepping into a postcard!
                            </p>
                        </div>
                        <div className="avatar relative bottom-6 left-14">
                            <div className="w-12 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                                <img src="https://i.postimg.cc/3RFTtLK1/ca11d8f2c8ccd3810edea0b604f7bc2f.jpg" />
                            </div>
                        </div>
                        <div className="rating w-20 top-3">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />

                        </div>
                        <div className="ml-12 mt-2">
                            <p className="text-2xl font-bold text-blackText dark:text-white">Mr. Michael</p>
                            <p className="text-[#757575]">Traveler</p>
                        </div>

                    </div>

                    {/* Testimonial -03 */}
                    <div>
                        <div className="bg-[#f4f4f4] dark:bg-[#1d232a] dark:border dark:border-white h-64 rounded-xl p-5 md:p-10">
                            <p className="text-blackText dark:text-white">
                                As a history buff, I was fascinated by the preservation of the historic sites at Guring Firing. It felt like stepping back in time to the early days of Australian settlement. Such a unique and special place!
                            </p>
                        </div>
                        <div className="avatar relative bottom-6 left-14">
                            <div className="w-12 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                                <img src="https://i.postimg.cc/T1kX6p5W/2023-2-largeimg-508812410.jpg" />
                            </div>
                        </div>
                        <div className="rating w-20 top-3">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />

                        </div>
                        <div className="ml-12 mt-2">
                            <p className="text-2xl font-bold text-blackText dark:text-white">Mr. David</p>
                            <p className="text-[#757575]">Traveler</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;