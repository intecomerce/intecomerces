import RoutesPublics from './RoutesPublics';
import RoutesPrivates from './RoutesPrivates';
import { useAtom } from 'jotai';
import { LoginAtom } from '../Context/LoginContext';

function AppRoutes(props: any) {
    const [login] = useAtom(LoginAtom);

    return (
        login.isLogged ? <RoutesPrivates /> : <RoutesPublics /> 
    );
}

export default AppRoutes;