import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Piechart from '../../Components/PieChart/Piechart';

const Statistics = () => {

    const [donated, setDonated] = useState([]);
    const [noFound, setNoFound] = useState('');


    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donated'));
        if (donatedItems) {
            setDonated(donatedItems)
        }
        else (
            setNoFound('no donated items found')
        )

    }, [])

    return (
        <div>
            <Piechart donated={donated} noFound={noFound}></Piechart>

        </div>
    );
};

export default Statistics;


