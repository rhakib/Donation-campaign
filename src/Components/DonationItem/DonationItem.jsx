import React from 'react';
import { Link } from 'react-router-dom';

const DonationItem = ({ card }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = card;

    return (

        <Link to={`/donationList/${id}`}> 
            <div className='pb-5 rounded-lg space-y-6' style={{ backgroundColor: card_bg }}>
                <img className='w-full' src={picture} alt="" />
                <div className='pl-4 space-y-2'>
                    <p className='w-24 text-center p-1 px-2 rounded-md' style={{ backgroundColor: category_bg, color: text_button_bg }}>{category}</p>
                    <h3 className='font-bold text-xl' style={{ color: text_button_bg }}>{title}</h3>
                </div>
            </div>
        </Link>
    );
};

export default DonationItem;