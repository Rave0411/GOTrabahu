import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useStateContext } from '../contexts/contextprovider';
import axiosClient from '../axiosClient';

export default function GuestLayout(){
    const {token, setUser, setToken} = useStateContext();

    if(token){
        return <Navigate to='/dashboard'/>
    }

    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.post('/employees/logoutEmployee')
        .then(() => {
            setUser(null);
            setToken(null);
        });
    };

    return(
        <div className="app-layout">

            <main>
                <Outlet />
            </main>
        </div>
    )
}
