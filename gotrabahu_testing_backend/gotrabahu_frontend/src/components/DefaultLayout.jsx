import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/contextprovider';
import React from 'react';
import axiosClient from '../axiosClient';

export default function DefaultLayout(){
 const {user, token, setUser, setToken} = useStateContext();
 const navigate = useNavigate();

  if(!token){
       return <Navigate to='/login'/>
    }

    React.useEffect(() => {
      if(!user){
        navigate('/login');
      } else {
        navigate('/dashboard');
      }
    }, [user, navigate]);

    const onLogout =  (ev) =>{
        ev.preventDefault();
        axiosClient.post('/employees/logoutEmployee')
        .then(() => {
           setUser(null)
           setToken(null)
           navigate('/login');
        })
    }

    return(
    <div className="app-layout">
      <main>
        <Outlet />
      </main>
    </div>
    )
}
