import { Link } from "react-router-dom";
import "./navigator.css";
import { LoginAtom } from '../../Context/LoginContext';
import { useAtom } from "jotai";

function NavigatorBar() {
    const [login, setLogin] = useAtom(LoginAtom);

    const PublicsLinks = (): JSX.Element => {
        return (
            <>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </>
        );
    }

    const PrivatesLinks = (): JSX.Element => {
        return (
            <>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </>
        );
    }
    return (
        <div className="navigator-bar">
            {
                login.isLogged
                    ?
                    <PrivatesLinks />
                    :
                    <PublicsLinks />
            }
        </div>
    );
}

export default NavigatorBar;