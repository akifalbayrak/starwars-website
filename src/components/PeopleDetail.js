import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PersonDetail = () => {
    const { id } = useParams(); // Fetch the ':id' parameter from the URL
    const [personDetail, setPersonDetail] = useState(null);
    const planetUrl = `https://swapi.dev/api/people/${id}/`;

    useEffect(() => {
        fetch(planetUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setPersonDetail(data))
            .catch((error) => console.error('Error fetching planet details:', error));
    }, [planetUrl]);

    return (
        <div className="container mx-auto px-4">
  <h2 className="text-2xl font-bold mb-4">Person Details</h2>
  {personDetail ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="font-bold mb-2">Name:</p>
        <p className="text-gray-700">{personDetail.name}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="font-bold mb-2">Height:</p>
        <p className="text-gray-700">{personDetail.height}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="font-bold mb-2">Mass:</p>
        <p className="text-gray-700">{personDetail.mass}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="font-bold mb-2">Hair Color:</p>
        <p className="text-gray-700">{personDetail.hair_color}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="font-bold mb-2">Skin Color:</p>
        <p className="text-gray-700">{personDetail.skin_color}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="font-bold mb-2">Birth Year:</p>
        <p className="text-gray-700">{personDetail.birth_year}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="font-bold mb-2">Gender:</p>
        <p className="text-gray-700">{personDetail.gender}</p>
      </div>
    </div>
  ) : (
    <p className="text-center text-gray-600">Loading person details...</p>
  )}
</div>

    );
};

export default PersonDetail;
