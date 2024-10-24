import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddbookTile from './GetTiles';
import { apiGetAdverts } from '../../services/product';
import { Link } from 'react-router-dom';

function GetAdverts() {
    const [adds, setAdds] = useState([]);

    const getAdds = async () => {
        const response = await apiGetAdverts()

        // axios.get(`${import.meta.env.VITE_BASE_URL}/todos?,limit=0`);
        setAdds(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getAdds();
    }, [])
    return (
        <div className="min-h-screen pt-10" style={{ backgroundColor: "#E5EDE9" }}>
          <h1 className="text-2xl font-bold text-center mt-10">ALL ADVERTS</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
            {
              adds.map((add) => {
                return (
                  <Link
                    to={`adds/${add.id}`}
                    key={add.id}
                    className="relative block p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105"
                  >
                    <div className="flex flex-col items-center space-y-4">
                      {/* Icon/Image */}
                      <img
                         src={`https://savefiles.org/${add.icon}?shareable_link=437`}
                        alt={add.title}
                        className="w-full h-40 object-cover rounded-md"
                      />
                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-800 text-center">{add.title}</h3>
                      {/* Category */}
                      <p className="text-sm text-gray-600 text-center">{add.category}</p>
                      {/* Description */}
                      <p className="text-sm text-gray-600 text-center">
                        {add.description}
                      </p>
                      {/* Price */}
                      <span className="block mt-4 text-lg font-semibold text-blue-600">
                        ${add.price}
                      </span>
                    </div>
                  </Link>
                );
              })
            }
          </div>
        </div>
      );
      
}

export default GetAdverts