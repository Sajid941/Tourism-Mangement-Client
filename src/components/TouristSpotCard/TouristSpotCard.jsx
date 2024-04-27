
const TouristSpotCard = ({ touristSpot }) => {
    const { image, spot_name, short_description, country_name, seasonality, travel_time } = touristSpot
    return (
        <div className="card card-compact shadow-xl">
            <figure><img src={image} className="md:w-[386px] md:h-[225px] " alt="Shoes" /></figure>
            <div className="card-body text-blackText dark:text-white">
                <h2 className="card-title md:text-2xl">{spot_name}, {country_name}</h2>
                <p className="text-[#757575]">{short_description}</p>
                <div className="flex bg-[#7dd3fc] p-2 rounded-lg bg-opacity-70 text-blackText  text-center">
                    <p>{seasonality.toUpperCase()}</p>
                    <p>{travel_time} days</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn mt-3 w-full bg-[#0284c7] hover:bg-green-500 text-white border-none">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotCard;