import { Link, useNavigate } from 'react-router-dom';
import './NavStyle.css';

function Nav() {

    const navigate = useNavigate();

    return (
        <div className="d-flex align-items-center">
            <ul className="nav my-4">
                <li className="nav-item">
                    <Link to="/" className="nav-link" id="nav-title">
                    Home
                    </Link>
                </li>
                {/* Link for Agents page */}
                <li className="nav-item">
                    <Link to="/list" className="nav-link"id="nav-title">
                        Agents
                    </Link>
                </li>
                {/* Link for Agencies page */}
                <li className="nav-item">
                    <Link to="/agencies" className="nav-link"id="nav-title">
                        Agencies
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/map" className="nav-link"id="nav-title">
                        Map
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;