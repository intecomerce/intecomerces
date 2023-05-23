import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { useAtom } from 'jotai';
import { LoginAtom } from "../../Context/LoginContext";
import { LoginType } from "../../@types/LoginType";

function Login(props: any) {
    const [login, setLogin] = useAtom(LoginAtom);

    const handleConfirmLogin = (): void => {
        setLogin({
            id: 0,
            name: "",
            email: "",
            isLogged: true
        });
        if (login.isLogged) {
            console.log("logado com sucesso");
        }
    }
    return (

        <>
            <strong>Entrar</strong>
            < GoogleLogin
                onSuccess={credentialResponse => {
                    handleConfirmLogin()
                }}
                onError={() => {
                    console.error('Falha no login');
                }}
            />
        </>
    );
}

export default Login;