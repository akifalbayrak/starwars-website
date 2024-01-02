import React, { useState, useEffect } from "react";
import Planet from "./Planet";

const Planets = () => {
    const [planetData, setPlanetData] = useState([]);
    let url = "https://swapi.dev/api/planets";
    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setPlanetData(data.results))
            .catch((error) => console.error("Error fetching planets:", error));
    }, []);

    return (
        <div className="container mx-auto text-white ">
            {planetData.length > 0 ? (
                <div className="bg-gray-300 bg-opacity-50 p-5 my-5 rounded-lg text-blue-100">
                    <h2 className="text-2xl font-bold mb-4">Planets</h2>
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-xs tracking-wider font-semibold">
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Created</th>
                                <th className="px-4 py-2">URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {planetData.map((pl) => (
                                <>
                                    <Planet
                                        key={pl.name}
                                        planet={pl}
                                        className="bg-white p-4 rounded-lg shadow-md "
                                    />
                                    <br />
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center mt-4">Loading planets...</div>
            )}
        </div>
    );
};

export default Planets;
