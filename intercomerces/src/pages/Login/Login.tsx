import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';

function Login() {
    const [logged, setLogged] = useState(false);

    return (
        <nav>
            <strong>Entrar</strong>
            < GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    setLogged(true);
                }}
                onError={() => {
                    console.log('Falha no login');
                    setLogged(false);
                }}
            />
        </nav>
    );
}

export default Login;