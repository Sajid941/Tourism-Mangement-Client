import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const touristSpot = useLoaderData()
    return (
        <div className="grid md:grid-cols-2 my-20 lg:w-[1250px] gap-10  mx-auto p-5 lg:p-0">
            <div>
                <img  className="rounded" src={touristSpot.image} alt="" />
            </div>
            <div className="md:border-l-2 md:pl-8 space-y-4 text-blackText dark:text-white">
                <h3 className="text-4xl font-bold">{touristSpot.spot_name}, {touristSpot.country_name}</h3>
                <p><span className="font-bold">Location:</span> {touristSpot.location}</p>
                <p><span className="font-bold">Seasonality:</span> {touristSpot.seasonality}</p>
                <p><span className="font-bold">Travel Time:</span> {touristSpot.travel_time} days</p>
                <p><span className="font-bold">Total Visitor Per Year:</span> {touristSpot.total_visitors_per_year}</p>
                <p><span className="font-bold">Average Cost:</span> {touristSpot.average_cost}</p>
                <p><span className="font-bold">Description:</span> {touristSpot.short_description}</p>

            </div>
        </div>
    );
};

export default ViewDetails;