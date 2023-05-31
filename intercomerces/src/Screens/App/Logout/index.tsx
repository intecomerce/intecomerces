import { googleLogout } from '@react-oauth/google';
import React from 'react';
import { useAtom } from 'jotai';
import { LoginAtom } from '../../../Context/LoginContext';

export type loginType = {
    email:string,
    name:string,
    picture:string
}

const Logout = () => {

    const [user, setUser] = useAtom<any>([]);
    const [login, setLogin] = useAtom(LoginAtom);

    const logOutIn = () => {
        googleLogout();
        setLogin({});
    };

    return (
        <div>
            <strong>Sair</strong>
            <br />
                <div>
                    <img src={login?.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {login?.name}</p>
                    <p>Email Address: {login?.email}</p>
                    <br />
                    <br />
                    <button onClick={logOutIn}>Log out</button>
                </div>
        </div>
    )
}

export default Logout;