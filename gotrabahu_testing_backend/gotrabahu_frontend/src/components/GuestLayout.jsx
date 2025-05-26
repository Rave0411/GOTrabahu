import {Outlet} from 'react-router-dom';
import { useStateContext } from '../contexts/contextprovider';
import { Navigate } from 'react-router-dom';


export default function GuestLayout(){
    const {token} = useStateContext();
    if(token){
        return <Navigate to='/landingpage'/>
    }
    return(
        <div>
            <div>
            </div>
            <Outlet/>
        </div>
    )
}
