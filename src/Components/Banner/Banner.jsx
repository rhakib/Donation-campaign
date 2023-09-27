import { useState } from "react";DonationList
import DonationList from "../DonationList/DonationList";
import './banner.css'

const Banner = () => {
    const [value , setValue] = useState('');
    const [inputValue , setInputValue] = useState('');

    const handleChange = event => {
        setValue(event.target.value)
    }
    
    const handleInput = () => {
        setInputValue(value)
    }
    console.log(inputValue);
    return (
        <div className="">
            <div className="h-[550px] relative" style={{ backgroundImage: 'url("https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR3emnOHdNt6G8lvFU2Lk4vAFQt_SiY9uPtaD-gKEh6srbU_F4LH9kSxxJE")' }}>
                <div className="bg-white bg-opacity-80 h-[550px]">
                    <div className="absolute query top-64 left-2 md:left-24 lg:left-96">
                        <h1 className="md:text-4xl text-center text-3xl font-bold mb-6">I Grow By Helping People In Need</h1>
                        <div className="flex justify-center">
                            <input onChange={handleChange} className="py-2 px-3 rounded-l-md outline-none md:w-80" type="text" placeholder="Search here...." />
                            <button onClick={handleInput} className="px-3 py-2 text-white rounded-r-md font-semibold bg-red-500">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <DonationList inputValue={inputValue}></DonationList>
        </div>
    );
};

export default Banner;