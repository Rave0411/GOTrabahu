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
    <div className="app-layout">
      <header>
     {/* Header Section */}
    <div className="header-container_8">
        <div className="post-header_8">
          <img src = {burger} alt="Burger Icon" className="burger-img_8" />
          <img src={logo} alt="Logo" className="header-logo_8" />
          <div className="search-bar_8">
            <input type="text" placeholder="Search..." className="search-input_8" />
            <button className="search-button_8">
              <img src={searchIcon} alt="Search Icon" className="search-img_8" />
            </button>
          </div>
          <div className="user-info_8">
            <img src={userIcon} alt="User Icon" className="user-img_8" />
          </div>
       </div>
      </div>
      </header>
      <aside>
                {/* Side Bar Section */}
                <div className="side-bar">
                  <div className="side-bar-item0">
                    <button className="side-bar-text0">Posting</button>
                  </div>
                  <div className="side-bar-item1">
                    <button className="side-bar-text1">Payment System</button>
                  </div>
                  <div className="side-bar-item2">
                    <button className="side-bar-text2">Subscription</button>
                  </div>
                  <div className="side-bar-item3">
                    <button className="side-bar-text3">Profile</button>
                  </div>
                  <div className="side-bar-item4">
                    <button href="#" onClick={onLogout} className="side-bar-text4">Log Out</button>
                  </div>
                </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
    )
}
