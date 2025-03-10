import {NavLink} from "react-router-dom";
import logo from "../../assets/logo-white.png";
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <img src={logo} alt="Company logo"/>
            <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Home</NavLink></li>
                <li><NavLink to="/alle-posts" className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Alle posts</NavLink></li>
                <li><NavLink to="/nieuwe-post" className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Nieuwe post maken</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;