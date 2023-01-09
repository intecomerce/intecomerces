import { useState } from 'react'
import './App.css'
import AppRoutes from "./AppRoutes";
import Sidebar from './components/NavigatorBar';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
 

  return (
    <div className="App">
      <GoogleOAuthProvider clientId="1067237110415-p9nh85vqal3jdcri8md492mutd4dh5im.apps.googleusercontent.com">
        <Sidebar />
        <AppRoutes />
        
      </GoogleOAuthProvider>



    </div>
  )
}

export default App;
