import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FilmDetails = () => {
    const { id } = useParams(); // Fetch the ':id' parameter from the URL
    const [filmDetails, setFilmDetails] = useState(null);
    const planetUrl = `https://swapi.dev/api/films/${id}/`;

    useEffect(() => {
        fetch(planetUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setFilmDetails(data))
            .catch((error) =>
                console.error("Error fetching planet details:", error)
            );
    }, [planetUrl]);

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Person Details</h2>
            {filmDetails ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">Title:</p>
                        <p className="text-gray-700">{filmDetails.title}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">Total Episode:</p>
                        <p className="text-gray-700">
                            {filmDetails.episode_id}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">Director:</p>
                        <p className="text-gray-700">{filmDetails.director}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">Producer:</p>
                        <p className="text-gray-700">{filmDetails.producer}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">Release Date:</p>
                        <p className="text-gray-700">
                            {filmDetails.release_date}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">Created:</p>
                        <p className="text-gray-700">{filmDetails.created}</p>
                    </div>{" "}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold mb-2">Short information:</p>
                        <p className="text-gray-700">
                            {filmDetails.opening_crawl}
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

export default FilmDetails;
