import React, { useState, useEffect } from "react";
import Film from './Film';
const Films = () => {
    const [filmData, setFilmData] = useState([]);

    useEffect(() => {
        fetch("https://swapi.dev/api/films")
            .then((response) => response.json())
            .then((data) => setFilmData(data.results))
            .catch((error) => console.log(error));
    }, [filmData]); // Empty dependency array ensures this effect runs only once (on mount)

    return (
        <div className="container mx-auto px-4">
            {filmData.length > 0 ? (
                <div className="bg-gray-300 bg-opacity-50 p-5 my-5 rounded-lg text-blue-100">
                <h2 className="text-2xl font-bold mb-4">Films</h2>
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-xs tracking-wider font-semibold">
                                <th className="px-4 py-2">title</th>
                                <th className="px-4 py-2">director</th>
                                <th className="px-4 py-2">URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filmData.map((fd) => (
                                <Film key={fd.name} film={fd} />
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

export default Films;
