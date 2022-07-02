import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import HomeScreen from './home/HomeScreen';

const ProtectedRoutes = () => {

    const userName = useSelector(state => state.nameUser)

    const navigate = useNavigate()
    if(userName !== ''){
        return <Outlet />
    } else { 
        return <HomeScreen/>
    }                     
};                        

export default ProtectedRoutes;