const Banner = () => {
    return (
        <div className="">
            <div className="h-[550px] relative" style={{ backgroundImage: 'url("/banner.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundAttachment: 'scroll' }}>
                <div className="bg-white bg-opacity-80 h-[550px]">
                    <div className="absolute top-64 left-2 md:left-24 lg:left-96">
                        <h1 className="md:text-4xl text-center text-3xl font-bold mb-6">I Grow By Helping People In Need</h1>
                        <div className="flex justify-center">
                            <input className="py-2 px-3 rounded-l-md outline-none md:w-80" type="text" placeholder="Search here...." />
                            <button className="px-3 py-2 text-white rounded-r-md font-semibold bg-red-500">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;