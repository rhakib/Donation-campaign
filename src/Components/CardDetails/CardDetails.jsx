import React from 'react';

const CardDetails = ({cardDetails}) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = cardDetails;
    return (
        <div>
            <div>
                <img className='w-[800px]' src={picture} alt="" />
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CardDetails;