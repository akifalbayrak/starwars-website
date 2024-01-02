import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VehicleDetail = () => {
    const { id } = useParams(); // Fetch the ':id' parameter from the URL
    const [vehicleDetail, setVehicleDetail] = useState(null);
    const vehicleUrl = `https://swapi.dev/api/vehicles/${id}/`;

    useEffect(() => {
        fetch(vehicleUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setVehicleDetail(data))
            .catch((error) =>
                console.error("Error fetching planet details:", error)
            );
    }, [vehicleUrl]);

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Vehicle Details</h2>
            {vehicleDetail ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">name:</p>
                        <p className="text-gray-700">{vehicleDetail.name}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">model:</p>
                        <p className="text-gray-700">
                            {vehicleDetail.model}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">manufacturer:</p>
                        <p className="text-gray-700">{vehicleDetail.manufacturer}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">cost_in_credits:</p>
                        <p className="text-gray-700">{vehicleDetail.cost_in_credits}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">length:</p>
                        <p className="text-gray-700">{vehicleDetail.length}</p>
                    </div>{" "}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">max_atmosphering_speed</p>
                        <p className="text-gray-700">
                            {vehicleDetail.max_atmosphering_speed}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">crew</p>
                        <p className="text-gray-700">
                            {vehicleDetail.crew}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">passengers</p>
                        <p className="text-gray-700">
                            {vehicleDetail.passengers}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">cargo_capacity</p>
                        <p className="text-gray-700">
                            {vehicleDetail.cargo_capacity}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">consumables</p>
                        <p className="text-gray-700">
                            {vehicleDetail.consumables}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">created</p>
                        <p className="text-gray-700">
                            {vehicleDetail.created}
                        </p>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-600">
                    Loading person details...
                </p>
            )}
        </div>
    );
};

export default VehicleDetail;
