import DonationItem from '../DonationItem/DonationItem';

const DonationList = ({data}) => {

    

    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12 p-4'>
                {
                   data?.map(card => <DonationItem key={card.id} card={card}></DonationItem>)               }   
                  
                
                            

            </div>
        </div>
    );
};

export default DonationList;







