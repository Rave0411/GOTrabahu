import {createBrowserRouter} from 'react-router-dom';
import Login from './views/login.jsx';
import Signup from './views/signup.jsx';
import Dashboard from './components/Dashboard.jsx';
import LandingPage from './components/LandingPage.jsx';
import Profile from './views/profile.jsx';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Dashboard />,
        children: [
            {
                path: '/profile',
                element: <Profile />,
            },
        ]
    },

    {
        path: '/',
        element: <LandingPage />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element:  <Signup />,
            },

        ]
    },
]);

export default router;
