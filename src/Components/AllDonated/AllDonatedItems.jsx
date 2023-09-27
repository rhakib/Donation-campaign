/* eslint-disable no-unused-vars */
import { getItem } from 'localforage';
import React, { useEffect, useState } from 'react';
import DonatedCards from './DonatedCards';
import { Link } from 'react-router-dom';

const AllDonatedItems = () => {

    const [donated, setDonated] = useState([]);
    const [noFound, setNoFound] = useState('');
    const [isShow, setIsShow] = useState(false);

    const handleShowBtn = (e) =>{
        setIsShow(!isShow)
        e.target.classList.add('hidden')

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

    return (
        <div>
            {noFound ? <p className="flex p-4 justify-center flex-col items-center text-2xl font-semibold ">
                <img className='w-[500px] rounded-2xl' src="pleasedonate.jpeg" alt="" />
                <h2 className='mt-6 w-[350px] md:w-[450px] text-center text-2xl font-semibold'> &#34;Always give without remembering and always receive without forgetting&#34;</h2>
                <Link to='/'> <button className='px-4 py-2 mt-4 text-white bg-green-500 rounded-lg'>Donate here</button></Link>
           
            </p> :
                <div>
                    <div className="grid grid-cols-1 p-6 md:grid-cols-2 gap-5 mt-5">
                        {
                            isShow ? donated.map(cards => <DonatedCards key={cards.id} cards={cards}></DonatedCards>) : donated.slice(0, 4).map(cards => <DonatedCards key={cards.id} cards={cards}></DonatedCards>)
                        }

                    </div>
                    <div>
                        {
                            donated.length > 4 && <button onClick={(e)=> handleShowBtn(e)}  className="px-4 py-2 bg-green-400 text-white font-semibold block mx-auto rounded-lg my-8">{isShow ? '' : 'See more'}</button>
                            
                        }
                        
                        
                    </div>


                </div>
            }
        </div>
    );
};

export default AllDonatedItems;