import { useLoaderData } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import TouristSpotCard from "../components/TouristSpotCard/TouristSpotCard";
import { useState } from "react";

const AllSpot = () => {
    const LoadedAllTouristSpots = useLoaderData()
    const [allTouristSpots, setAllTouristSpots] = useState(LoadedAllTouristSpots)
    const handleSortUnder30000 = () => {
        const filterSpot = LoadedAllTouristSpots.filter(LoadedAllTouristSpot => LoadedAllTouristSpot.average_cost < "30000")
        setAllTouristSpots(filterSpot)
    }
    const handleSortUnder40000 = () => {
        const filterSpot = LoadedAllTouristSpots.filter(LoadedAllTouristSpot => LoadedAllTouristSpot.average_cost < "40000")
        setAllTouristSpots(filterSpot)
    }
    const handleSortUnder50000 = () => {
        const filterSpot = LoadedAllTouristSpots.filter(LoadedAllTouristSpot => LoadedAllTouristSpot.average_cost < "50000")
        setAllTouristSpots(filterSpot)
    }
    const handleSortUnder60000 = () => {
        const filterSpot = LoadedAllTouristSpots.filter(LoadedAllTouristSpot => LoadedAllTouristSpot.average_cost < "60000")
        setAllTouristSpots(filterSpot)
    }
    const handleAscendingSort =()=>{
        const hello =allTouristSpots.sort((a,b)=>a.average_cost>b.average_cost?1:-1).map(allTouristSpot=> {return(allTouristSpot)})
        setAllTouristSpots(hello)
    }
    return (
        <div className="lg:w-[1250px] mx-auto my-10">
            <div className="text-center px-5 space-y-3 mt-10 mb-5 lg:px-48">
                <h1 className="text-2xl md:text-4xl font-bold text-blackText dark:text-white">All Tourists Spot</h1>
                <p className="text-[#757575]">With its beauty and variety of activities, WayWise promises an unforgettable experience for visitors of all ages. Come discover the magic of WayWise and create memories that will last a lifetime!</p>
            </div>
            <div className="flex justify-end mr-5 lg:mr-0">
                <div className="dropdown my-5 dropdown-end ">
                    <div tabIndex={0} role="button" className="btn m-1  bg-green-500 hover:bg-green-600 text-white border-none">Sort <SlArrowDown /> </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={handleSortUnder30000}><a>Under 30000 Taka</a></li>
                        <li onClick={handleSortUnder40000}><a>Under 40000 Taka</a></li>
                        <li onClick={handleSortUnder50000}><a>Under 50000 Taka</a></li>
                        <li onClick={handleSortUnder60000}><a>Under 60000 Taka</a></li>
                        <li onClick={handleAscendingSort}><a>Lowest - Highest</a></li>
                        <li onClick={()=>setAllTouristSpots(LoadedAllTouristSpots)} className="text-blue-700"><a>Show All</a></li>
                    </ul>
                </div>
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