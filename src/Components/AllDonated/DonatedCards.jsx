import React from 'react';
import { Link } from 'react-router-dom';

const DonatedCards = ({ cards }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = cards;
    return (
        <div className=''>
            <div className='rounded-lg flex' style={{ backgroundColor: card_bg }}>
                <div>
                    <img className='w-72 h-full' src={picture} alt="" />
                </div>
                <div className='ml-6 mt-4 mb-2 mr-2 space-y-2 '>
                    <p className='w-24 text-center p-1 px-2 rounded-md' style={{ backgroundColor: category_bg, color: text_button_bg }}>{category}</p>
                    <h3 className='font-bold text-xl'>{title}</h3>
                    <h4 style={{ color: text_button_bg }}>${price}</h4>
                    <Link to={`/donationList/${id}`}>
                        <button className='text-white mt-2 font-bold px-3 py-1 rounded-md' style={{ backgroundColor: text_button_bg }}>Vew Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonatedCards;