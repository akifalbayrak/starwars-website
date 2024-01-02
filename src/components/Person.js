import React from "react";
import { Link } from "react-router-dom";
const Person = ({ person }) => {
    return (
        <tr
            key={person.name}
            className="border-b border-gray-200 text-center hover:text-black">
            <td className="px-4 py-2">{person.name}</td>
            <td className="px-4 py-2">{person.birth_year}</td>
            <td className="px-4 py-2">{person.gender}</td>
            <td className="px-4 py-2">{new Date(person.created).toLocaleDateString()}</td>
            <td className="px-4 py-2"><Link to={person.url.split("/")[5]}>Details</Link></td>
        </tr>
    );
};

export default Person;
