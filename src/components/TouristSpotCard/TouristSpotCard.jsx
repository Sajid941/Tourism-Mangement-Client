import { FaRegHeart } from "react-icons/fa";

const TouristSpotCard = ({ touristSpot }) => {
    const { image, spot_name, short_description, country_name, seasonality, travel_time } = touristSpot
    return (
        <div className="card card-compact dark:border dark:border-[#757575] shadow-xl">
            <figure>
                <img src={image} className="w-full md:h-[225px] " alt="Shoes" />
                <div className="w-10 h-10 absolute top-4 right-4 ">
                    <div className="w-full h-full absolute hover:bg-gray-600 rounded-full animate-ping">

                    </div>
                    <div className="w-full h-full flex  relative justify-center items-center bg-gray-800 rounded-full text-white hover:text-pink-700 transition duration-700 ">
                        <FaRegHeart  size={20} />
                    </div>
                </div>
            </figure>
            <div className="card-body text-blackText dark:text-white">
                <h2 className="card-title md:text-2xl">{spot_name}, {country_name}</h2>
                <p className="text-[#757575]">{short_description}</p>
                <div className="flex bg-[#7dd3fc] p-2 rounded-lg bg-opacity-70  text-blackText dark:text-white text-center">
                    <p>{seasonality.toUpperCase()}</p>
                    <p>{travel_time} days</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn mt-3 w-full hover:bg-[#0284c7] bg-[#478dc9] text-white border-none">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotCard;