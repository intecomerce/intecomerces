import { Link } from "react-router-dom";
import "./navigator.css";
import { LoginAtom } from '../../Context/LoginContext';
import { SetStateAction, useAtom } from "jotai";
import { LoginType } from "../../@types/LoginType";

function NavigatorBar() {
    const [login, setLogin] = useAtom<LoginType, [SetStateAction<LoginType>], void>(LoginAtom);

    const PublicsLinks = (): JSX.Element => {
        return (
            <>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/products">Produtos</Link>
            </>
        );
    }

    const PrivatesLinks = (): JSX.Element => {
        return (
            <>
                <Link to="/">Home</Link>
                <Link to="/products">Produtos</Link>
                <Link to="/favorites">Favoritos</Link>
                <Link to="/litleCar">Carrinho</Link>
                <Link to="/profile">Perfil</Link>
                <Link to="/logout">Sair</Link>
            </>
        );
    }

    return (
        <div className="navigator-bar">
            {
                login.email != "" && login.email != null
                    ?
                    <PrivatesLinks />
                    :
                    <PublicsLinks />
            }
        </div>
    );
}

export default NavigatorBar;