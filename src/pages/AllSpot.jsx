import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard/TouristSpotCard";

const AllSpot = () => {
    const allTouristSpots = useLoaderData()
    return (
        <div className="lg:w-[1250px] mx-auto my-10">
            <div className="text-center px-5 space-y-3 mt-10 mb-5 lg:px-48">
                <h1 className="text-2xl md:text-4xl font-bold text-blackText dark:text-white">All Tourists Spot</h1>
                <p className="text-[#757575]">With its beauty and variety of activities, Guring Fering promises an unforgettable experience for visitors of all ages. Come discover the magic of Guring Fering and create memories that will last a lifetime!</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 p-5  lg:p-0 gap-6">
                {
                    allTouristSpots.map((allTouristSpot, idx) => <TouristSpotCard key={idx} touristSpot={allTouristSpot}></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllSpot;