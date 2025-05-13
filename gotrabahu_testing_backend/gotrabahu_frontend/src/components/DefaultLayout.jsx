import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/contextprovider';
import React from 'react';

export default function DefaultLayout(){
 const {user, token, setUser, setToken} = useStateContext();

  if(!token){
       return <Navigate to='/login'/>
    }
           const onLogout =  (ev) =>{
        ev.preventDefault();
        axiosClient.get('/logout')
        .then(({}) => {
           setUser(null)
           setToken(null)
        })
    }

    return(
        <div id="defaultlayout">
         <div className="content">
            <header>
                <div>
                    Header
                </div>
                <div>
                    {user.name}
                    <a href="#" onClick={onLogout} className="btn-logout"> Logout</a>
                </div>
            </header>
            <main>
            <Outlet />
            </main>
            </div>
        </div>
    )
}
