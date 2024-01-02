import React, { useState, useEffect } from "react";
import Vehicle from './Vehicle';
const Vehicles = () => {
    const [vehicleData, setVehicleData] = useState([]);

    useEffect(() => {
        fetch("https://swapi.dev/api/vehicles")
            .then((response) => response.json())
            .then((data) => setVehicleData(data.results))
            .catch((error) => console.log(error));
    }, [vehicleData]); // Empty dependency array ensures this effect runs only once (on mount)

    return (
        <div className="container mx-auto px-4">
            {vehicleData.length > 0 ? (
                <div className="bg-gray-300 bg-opacity-50 p-5 my-5 rounded-lg text-blue-100">
                <h2 className="text-2xl font-bold mb-4">Vehicles</h2>
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-xs tracking-wider font-semibold">
                                <th className="px-4 py-2">name</th>
                                <th className="px-4 py-2">model</th>
                                <th className="px-4 py-2">URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vehicleData.map((vd) => (
                                <Vehicle key={vd.name} vehicle={vd} />
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center mt-4">Loading films...</div>
            )}
        </div>
    );
};

export default Vehicles;
