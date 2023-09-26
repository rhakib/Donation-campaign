import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../Layout/MainLayOut';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/DonationPage/Donation';
import AllDonatedItems from '../Components/AllDonated/AllDonatedItems';
import Statistics from '../Pages/Statictics/Statistics';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <Statistics></Statistics>
            }
        ]
    
    }
])

export default myCreatedRouter;