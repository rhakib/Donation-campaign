import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import DonationList from "../../Components/DonationList/DonationList";

const Home = () => {
    const donationList = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <DonationList donationList={donationList}></DonationList>
        </div>
    );
};

export default Home;