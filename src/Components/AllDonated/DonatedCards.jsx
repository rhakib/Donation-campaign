import React from 'react';
import { Link } from 'react-router-dom';

const DonatedCards = ({ cards }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = cards;
    return (
        <div>
            <div className='rounded-lg flex' style={{ backgroundColor: card_bg }}>
                <div>
                    <img className='w-72' src={picture} alt="" />
                </div>
                <div className='ml-6 mt-6 space-y-2'>
                    <p className='w-24 text-center p-1 px-2 rounded-md' style={{ backgroundColor: category_bg, color: text_button_bg }}>{category}</p>
                    <h3 className='font-bold text-xl'>{title}</h3>
                    <h4 style={{ color: text_button_bg }}>${price}</h4>
                    <Link to={`/donationList/${id}`}>
                        <button className='text-white font-bold px-3 py-1 rounded-md' style={{ backgroundColor: text_button_bg }}>Vew Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonatedCards;