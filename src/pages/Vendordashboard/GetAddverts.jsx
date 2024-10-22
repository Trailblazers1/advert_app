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
        <div>
            <h1>ALL ADVERTS</h1>
            <div>
                {
                    adds.map((add) => {
                        return <Link to={`adds/${add.id}`}>
                            <AddbookTile title={add.title}
                                icon={add.icon}
                              description={add.description}
                              price={add.price} 
                              category={add.category} 
                            />
                        </Link>

                    }

                    )
                }
            </div>
        </div>
    )
}

export default GetAdverts