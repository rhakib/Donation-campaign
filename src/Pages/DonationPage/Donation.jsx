import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardDetails from '../../Components/CardDetails/CardDetails';

const Donation = () => {

    const [cardDetails, setCardDetails] = useState({})

    const cards = useLoaderData()
    
    const { id } = useParams()
    


    useEffect(() => {
        const cardFound = cards?.find(card => card.id == id )
        setCardDetails(cardFound)
    }, [id, cards])
    console.log(cardDetails);

    return (
        <div>
            <div>
                <CardDetails cardDetails={cardDetails}></CardDetails>
            </div>
        </div>
    );
};

export default Donation;