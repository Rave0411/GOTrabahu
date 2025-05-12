import {createBrowserRouter} from 'react-router-dom';
import Login from './views/login.jsx';
import SignupEmployee from './views/signupEmployee.jsx';
import SignupEmployer from './views/signupEmployer.jsx';
import Dashboard from './components/Dashboard.jsx';
import LandingPage from './components/LandingPage.jsx';
import Profile from './views/profile.jsx';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/login',
        element: <Login />,
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
        path: '/',
        element: <Dashboard />,
        children: [
            {
                path: '/profile',
                element: <Profile />,
            },
        ]
    }

]);

export default router;
