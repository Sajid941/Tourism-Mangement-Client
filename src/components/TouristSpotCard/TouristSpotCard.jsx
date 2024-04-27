
const TouristSpotCard = ({touristSpot}) => {
    const {image,spot_name,short_description,country_name}=touristSpot
    return (
        <div className="card card-compact shadow-xl">
            <figure><img src={image} className="md:w-[386px] md:h-[225px] " alt="Shoes" /></figure>
            <div className="card-body text-blackText dark:text-white">
                <h2 className="card-title">{spot_name}, {country_name}</h2>
                <p className="text-gray-400">{short_description}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-600 hover:bg-green-500 text-white border-none">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotCard;