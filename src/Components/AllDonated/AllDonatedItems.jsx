import { getItem } from 'localforage';
import React, { useEffect, useState } from 'react';
import DonatedCards from './DonatedCards';

const AllDonatedItems = () => {

    const [donated, setDonated] = useState([]);
    const [noFound, setNoFound] = useState('');
    const [isShow, setIsShow] = useState(false);

    const handleShowBtn = (e) =>{
        setIsShow(!isShow)
        e.target.classList.add('hidden');

    }

    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donated'));
        if (donatedItems) {
            setDonated(donatedItems)
        }
        else (
            setNoFound('no donated items found')
        )
    }, [])
    console.log(donated);

    return (
        <div>
            {noFound ? <p className="flex justify-center items-center text-2xl font-semibold ">{noFound}</p> :
                <div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        {
                            isShow ? donated.map(cards => <DonatedCards key={cards.id} cards={cards}></DonatedCards>) : donated.slice(0, 4).map(cards => <DonatedCards key={cards.id} cards={cards}></DonatedCards>)
                        }

                    </div>
                    <div>
                        {
                            donated.length > 4 && <button onClick={(e)=> handleShowBtn(e)}  className="px-4 py-2 bg-green-300 block mx-auto rounded-lg my-8">{isShow ? '' : 'See more'}</button> 
                            
                        }
                        
                        
                    </div>


                </div>
            }
        </div>
    );
};

export default AllDonatedItems;