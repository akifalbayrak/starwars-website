import React, { useState, useEffect } from "react";
import Person from "./Person";

const People = () => {
    const [peopleData, setPeopleData] = useState([]);

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
            .then((response) => response.json())
            .then((data) => setPeopleData(data.results))
            .catch((error) => console.log(error));
    }, [peopleData]); // Empty dependency array ensures this effect runs only once (on mount)

    return (
        <div className="container mx-auto px-4">
            {peopleData.length > 0 ? (
                <div className="bg-gray-300 bg-opacity-50 p-5 my-5 rounded-lg text-blue-100">
                <h2 className="text-2xl font-bold mb-4">People</h2>
                    <table className="table-auto w-full">
                        <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-xs tracking-wider font-semibold">
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Birth Year</th>
                                <th className="px-4 py-2">Gender</th>
                                <th className="px-4 py-2">Created</th>
                                <th className="px-4 py-2">URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {peopleData.map((pp) => (
                                <Person key={pp.name} person={pp} />
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center mt-4">Loading peoples...</div>
            )}
        </div>
    );
};

export default People;
