import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PlanetDetail = () => {
    const { id } = useParams(); // Fetch the ':id' parameter from the URL
    const [planetDetails, setPlanetDetails] = useState(null);
    const planetUrl = `https://swapi.dev/api/planets/${id}/`;

    useEffect(() => {
        fetch(planetUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setPlanetDetails(data))
            .catch((error) =>
                console.error("Error fetching planet details:", error)
            );
    }, [planetUrl]);

    return (
        <div className="container mx-auto px-4 bg-green-100 bg-opacity-50 my-auto">
            <h2 className="text-2xl font-bold mb-4">Planet Details</h2>
            {planetDetails ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">Name:</p>
                        <p className="text-gray-700">{planetDetails.name}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">Rotation Period:</p>
                        <p className="text-gray-700">
                            {planetDetails.rotation_period}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">Orbital Period:</p>
                        <p className="text-gray-700">
                            {planetDetails.orbital_period}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">Population:</p>
                        <p className="text-gray-700">
                            {planetDetails.population}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">Diameter:</p>
                        <p className="text-gray-700">
                            {planetDetails.diameter}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">Climate:</p>
                        <p className="text-gray-700">
                            {planetDetails.climate}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">Gravity:</p>
                        <p className="text-gray-700">
                            {planetDetails.climate}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">Terrain:</p>
                        <p className="text-gray-700">
                            {planetDetails.terrain}
                        </p>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-600">
                    Loading planet details...
                </p>
            )}
        </div>
    );
};

export default PlanetDetail;
