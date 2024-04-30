import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
    const { user, dataLoading, setDataLoading } = useAuth()
    const [touristSpots, setTouristSpots] = useState([])
    // touristSpots.filter(touristSpot => console.log(touristSpot._id))
    useEffect(() => {
        fetch(`https://a10-tourism-management-server.vercel.app/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setTouristSpots(data)
            })
            .finally(() => {
                setDataLoading(false)
            })
    })


    const handleDeleteSpot = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://a10-tourism-management-server.vercel.app/touristSpots/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        const remainingSpot = touristSpots.filter(touristSpot => touristSpot._id !== id)
                        setTouristSpots(remainingSpot)
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    if (dataLoading) {
        return <div className="flex justify-center h-screen  border-4 items-center">
            <span className="loading loading-spinner text-success"></span>
        </div>
    }
    return (
        <div className=" lg:px-20 my-10">
            <div className="text-center px-5 space-y-3 mt-10 mb-5 lg:px-48">
                <h1 className="text-2xl md:text-4xl font-bold text-blackText dark:text-white">My List of Tourists Spot</h1>
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="dark:text-white">
                            <th></th>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Seasonality</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            touristSpots.map((touristSpot, idx) =>
                                <tr key={idx} className="text-blackText dark:text-white">
                                    <th>{idx + 1}</th>
                                    <td>{touristSpot.spot_name}</td>
                                    <td>{touristSpot.country_name}</td>
                                    <td>{touristSpot.seasonality}</td>

                                    <td><Link to={`/updatePage/${touristSpot._id}`} className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg text-white">Update</Link></td>
                                    <td><button onClick={() => handleDeleteSpot(touristSpot._id)} className="bg-red-500 hover:bg-red-600 p-2 rounded-lg text-white">Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;