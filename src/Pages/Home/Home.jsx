import Banner from "../../Components/Banner/Banner";
import DonationList from "../../Components/DonationList/DonationList";
import { useEffect, useState } from "react";

const Home = () => {
    
    const  [data, setData] = useState();
    const [value , setValue] = useState('');
    const [filter, setFilter] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))

    }, [])    

    const handleChange = event => {
        setValue(event.target.value)
    }
    
    const handleInput = () => {
        const filteredData = data.filter(item => item.category.toLowerCase().includes(value.toLowerCase()))
        setFilter(filteredData)
        
        
    }

    
    return (
        <div>
            <Banner handleInput={handleInput} handleChange={handleChange}></Banner>
            {
                filter.length > 0 ? (
                    <DonationList data={filter}></DonationList>
                ) : (
                    <DonationList data={data} ></DonationList>
                )
            }
        </div>
    );
};

export default Home;