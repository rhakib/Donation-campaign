import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

const MainLayOut = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;