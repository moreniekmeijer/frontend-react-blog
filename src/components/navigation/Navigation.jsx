import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/alle-posts">Alle posts</NavLink></li>
                <li><NavLink to="/nieuwe-post">Nieuwe post maken</NavLink></li>
            </ul>
        </nav>

    )
}

export default Navigation;