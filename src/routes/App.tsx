import { Navigate } from 'react-router-dom';

let user = true;
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
