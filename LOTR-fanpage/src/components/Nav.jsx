import { Link, useNavigate } from 'react-router-dom';

function Nav() {

    const navigate = useNavigate();

    return (
        <div className="d-flex align-items-center">
            <ul className="nav my-4">
                {/* Link for Agents page */}
                <li className="nav-item">
                    <Link to="/list" className="nav-link">
                        Agents
                    </Link>
                </li>
                {/* Link for Agencies page */}
                <li className="nav-item">
                    <Link to="/agencies" className="nav-link">
                        Agencies
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/map" className="nav-link">
                        Map
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;