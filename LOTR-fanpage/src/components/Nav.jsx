import { Link, useNavigate } from 'react-router-dom';
import CharacterList from "./characterList";
import CharacterPage from "./CharacterPage";
import Landing from "./Landing";
import Films from "./Films";
import Books from "./Books";
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
                    <Link to="/Books" className="nav-link"id="nav-title">
                        Books
                    </Link>
                </li>
                {/* Link for Agencies page */}
                <li className="nav-item">
                    <Link to="/Films" className="nav-link"id="nav-title">
                        Films
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/characterList" className="nav-link"id="nav-title">
                        Characters
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
