import React, { useEffect, useState } from "react";
import { GoogleLogin, TokenResponse, useGoogleLogin } from '@react-oauth/google';
import { useAtom } from 'jotai';
import { LoginAtom } from "../../Context/LoginContext";
import { LoginType } from "../../@types/LoginType";
import axios from 'axios';

function Login() {
    const [login, setLogin] = useAtom(LoginAtom);

    const [loginResponse, setLoginResponse] = useState<TokenResponse>();

    useEffect(
        () => {
            if (loginResponse) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${loginResponse.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${loginResponse.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setLogin(res.data);
                    })
                    .catch((err) => console.error(err));
            }
        },
        [loginResponse]
    );


    const loginHandler = useGoogleLogin({
        onSuccess: (res: TokenResponse | any) => setLoginResponse(res),
        onError: (error) => console.error('Login Failed:', error)
    });

    return (

        <>
            <strong>Entrar</strong>
            <button onClick={() => loginHandler()}>Entrar com Google 🚀 </button>
        </>
    );
}

export default Login;