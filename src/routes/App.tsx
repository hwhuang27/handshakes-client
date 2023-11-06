import { Navigate } from 'react-router-dom';
// import '../styles/Login.css';

let user = false;
function App() {
    return (
        <div>
            {!user && (
                <Navigate to="/login" replace={true} />
            )}
            <p>Chat</p>
        </div>
    )
}

export default App;
