import RoutesPublics from './RoutesPublics';
import RoutesPrivates from './RoutesPrivates';
import { useAtom } from 'jotai';
import { LoginAtom } from '../Context/LoginContext';
import { useEffect } from 'react';

function AppRoutes(props: any) {
    const [login] = useAtom(LoginAtom);

    return (
        login.email  ? <RoutesPrivates /> : <RoutesPublics />
    );
}

export default AppRoutes;