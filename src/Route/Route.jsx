import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../Layout/MainLayOut';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/DonationPage/Donation';
import Statictics from '../Pages/Statictics/Statictics';
import AllDonatedItems from '../Components/AllDonated/AllDonatedItems';

const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: 'allDonatedItems',
                element: <AllDonatedItems></AllDonatedItems>
            },
            {
                path: '/donationList/:id',
                element: <Donation></Donation>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: '/statictics',
                element: <Statictics></Statictics>
            }
        ]
    
    }
])

export default myCreatedRouter;