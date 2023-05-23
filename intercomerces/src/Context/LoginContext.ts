import { atom } from 'jotai';
import { LoginType } from '../@types/LoginType';

export const LoginAtom = atom<LoginType>({
    id:0,
    name: "",
    email: "",
    isLogged: false
});

