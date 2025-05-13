import {Outlet} from 'react-router-dom';
import { useStateContext } from '../contexts/contextprovider';


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
