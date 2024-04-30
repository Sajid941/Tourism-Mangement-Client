import { Link } from "react-router-dom";

const Countries = ({ country }) => {
    const short_description = country.description.slice(0, 80)
    return (
        <div>
            <Link to={`/countriesSpots/${country.country_name}`} className="card card-compact w-72 bg-base-200 shadow-xl mx-5 dark:bg-[#1d232a] dark:border dark:text-white">
                <figure><img className="h-56 w-full" src={country.image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{country.country_name}</h2>

                    <div>{short_description}
                        <div className="tooltip text-left" data-tip={country.description}>
                            <span className="pl-1 text-blue-700">Read more</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Countries;