import React from "react";
import { Link } from "react-router-dom";
const Vehicle = ({ vehicle }) => {
    return (
        <tr
            key={vehicle.name}
            className="border-b border-gray-200 text-center hover:text-black">
            <td className="px-4 py-2">{vehicle.name}</td>
            <td className="px-4 py-2">{vehicle.model}</td>
            <td className="px-4 py-2">
                <Link to={vehicle.url.split("/")[5]}>Details</Link>
            </td>
        </tr>
    );
};

export default Vehicle;
