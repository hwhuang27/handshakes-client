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

// async function checkToken() {
//     try {
//         const token = localStorage.getItem('token')!;
//         const decoded = jwtDecode(token);

//         // if access token is expired, use refresh token to get new access token
//         if (decoded?.exp && Date.now() >= decoded.exp * 1000) {
//             const response = await fetch(
//                 `https://messenger-api-production.up.railway.app/auth/refresh`
//             );
//             if (!response.ok) {
//                 console.log(`Error while checking token expiry.`);
//                 throw new Error(`Status ${response.status}`);
//             }
//             let data = await response.json();
//             localStorage.setItem('token', data.accessToken);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }