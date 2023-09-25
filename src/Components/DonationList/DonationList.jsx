import React from 'react';
import DonationItem from '../DonationItem/DonationItem';

const DonationList = ({donationList}) => {
    console.log(donationList);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12'>
                {
                    donationList?.map(card => <DonationItem key={card.id} card={card}></DonationItem>)
                }

            </div>
        </div>
    );
};

export default DonationList;