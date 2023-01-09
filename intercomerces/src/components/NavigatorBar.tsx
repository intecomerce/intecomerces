import { Link } from "react-router-dom";
import "./navigator.css";

function NavigatorBar() {
    return (
        <div className="navigator-bar">
            <Link to="/">Home</Link>
            <Link to="/smartphones">Smartphones</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default NavigatorBar;