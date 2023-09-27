import React from 'react';
import Swal from 'sweetalert2'
import '../Banner/banner.css'



const CardDetails = ({ cardDetails }) => {

    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = cardDetails;

    const addedDonatedArr = []

    const handleDonate = () => {
        const donateItems = JSON.parse(localStorage.getItem('donated'));

        if (!donateItems) {
            addedDonatedArr.push(cardDetails)
            localStorage.setItem('donated', JSON.stringify(addedDonatedArr))
            Swal.fire(
                'Success!',
                'You successfully donated here',
                'success'
              )
        }
        else {

            const isExists = donateItems.find(item => item.id == id)

            if (!isExists) {
                addedDonatedArr.push(...donateItems, cardDetails)
                localStorage.setItem('donated', JSON.stringify(addedDonatedArr))
                Swal.fire(
                    'Success!',
                    'You successfully donated here',
                    'success'
                  )

            }
            else{
                Swal.fire(
                    'Error!',
                    'You already donated here',
                    'error'
                  )
            }


        }
    }

    return (
        <div className='p-6'>
            <div className='max-w-5xl mx-auto relative'>
                <img className='w-full mx-auto' src={picture} alt="" />
                
                    <div className='bg-black donate bg-opacity-50 absolute top-[155px] md:top-[368px] lg:top-[558px] h-20 w-full'>
                        <button style={{backgroundColor: text_button_bg}} onClick={handleDonate} className='ml-6 mt-4 text-white px-3 py-2 items-center rounded-md'>Donate ${price}</button>
                    </div>
                
                <div className='mt-6 space-y-4'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;