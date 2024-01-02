import React from "react";
import { Link } from "react-router-dom";
const Planet = ({ planet }) => {
    return (
        <tr
        key={planet.key}
        className="border-b border-gray-200 text-center hover:text-black">
        <td className="px-4 py-2">{planet.name}</td>
            <td className="px-4 py-2">{new Date(planet.created).toLocaleDateString()}</td>
            <td className="px-4 py-2">
                <Link to={planet.url.split("/")[5]}>Details</Link>
            </td>
        </tr>
    );
};

export default Planet;
