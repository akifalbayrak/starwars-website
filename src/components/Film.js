import React from "react";
import { Link } from "react-router-dom";
const Film = ({ film }) => {
    return (
        <tr
            key={film.title}
            className="border-b border-gray-200 text-center hover:text-black">
            <td className="px-4 py-2">{film.title}</td>
            <td className="px-4 py-2">{film.director}</td>
            <td className="px-4 py-2">
                <Link to={film.url.split("/")[5]}>Details</Link>
            </td>
        </tr>
    );
};

export default Film;
