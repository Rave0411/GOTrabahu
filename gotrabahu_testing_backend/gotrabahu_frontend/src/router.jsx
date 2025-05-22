import {createBrowserRouter} from 'react-router-dom';
import Login from './views/login.jsx';
import Signup from './views/signup.jsx';
import SignupEmployer from './views/signupEmployer.jsx';
import Dashboard from './views/Dashboard.jsx';
import LandingPage from './views/LandingPage.jsx';
import Profile from './views/profile.jsx';
import GuestLayout from './components/GuestLayout.jsx';
import DefaultLayout from './components/DefaultLayout.jsx';


const router = createBrowserRouter ([
    {
        path: '',
        element: <GuestLayout/>,
        children:[
                {
                    path: '/',
                    element: <LandingPage/>,
                },
                {
                    path: '/login',
                    element: <Login />,
                },
                {
                    path: '/signupEmployee',
                    element:  <Signup />,
                },
                    {
                    path: '/signupEmployer',
                    element:  <SignupEmployer />,
                },
        ]
    },


    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/profile',
                element: <Profile />,
            },
        ]
    }

]);

export default router;
