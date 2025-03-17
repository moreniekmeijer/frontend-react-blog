import {Link} from "react-router-dom";

function NotFound() {
    return (
        <>
            <h3>Pagina niet gevonden</h3>
            <p><Link to="/" >klik hier</Link> om terug te gaan naar home</p>
        </>
    )
}

export default NotFound;