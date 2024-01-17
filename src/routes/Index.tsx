import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

function Index(){
    const userToken = localStorage.getItem('token');
    let tokenExpired = false;

    if(userToken){
        const expiry = jwtDecode(userToken).exp;
        if (expiry && Date.now() >= expiry * 1000) {
            tokenExpired = true;
        }
    }

    return(
        <>
            {!userToken && <Navigate to='/login' replace={true} />}

            {tokenExpired && <Navigate to='/login' replace={true} />}

            {userToken && !tokenExpired && <Navigate to='/chat' replace={true} />}
        </>
    )
}

export default Index;
