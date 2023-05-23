import './App.css'
import AppRoutes from "./Routes/AppRoutes";
import Sidebar from './components/NavigationBar/NavigatorBar';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState } from 'react';
import Login from './Screens/Login';

function App() {
    const [logged, setLogged] = useState(false);

    const handleOnLogin = (e:boolean)=>{
        alert(e)
        setLogged(e);
    }
    return (
        <div className="App">
            <GoogleOAuthProvider clientId="1067237110415-p9nh85vqal3jdcri8md492mutd4dh5im.apps.googleusercontent.com">
                <Sidebar />
                <AppRoutes isLoggedIn={(e:boolean) => handleOnLogin(e)} />
            </GoogleOAuthProvider>
        </div>
    )
}

export default App;
