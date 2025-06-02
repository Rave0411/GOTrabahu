import {createBrowserRouter} from 'react-router-dom';
import LoginEmployee from './views/loginEmployee.jsx';
import LoginEmployer from './views/loginEmployer.jsx';
import SignupEmployee from './views/signupEmployee.jsx';
import SignupEmployer from './views/signupEmployer.jsx';
import Dashboard from './views/Dashboard.jsx';
import LandingPage from './views/LandingPage.jsx';
import Profile from './views/profile.jsx';
import GuestLayout from './components/GuestLayout.jsx';
import DefaultLayout from './components/DefaultLayout.jsx';
import Forgot from './views/forgotPassword.jsx';


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
                    path: '/loginEmployee',
                    element: <LoginEmployee />,
                },
                {
                    path: '/loginEmployer',
                    element: <LoginEmployer />,
                },
                {
                    path: '/signupEmployee',
                    element:  <SignupEmployee />,
                },
                {
                    path: '/signupEmployer',
                    element:  <SignupEmployer />,
                },
                {
                    path: '/forgot',
                    element:  <Forgot />,
                },
        ]
    },


    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: 'dashboard',
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
