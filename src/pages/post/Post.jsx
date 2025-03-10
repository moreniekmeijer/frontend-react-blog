import {Link, useParams} from "react-router-dom";
import posts from "../../constants/data.json";
import formatDate from "../../helpers/formatDate.js";

function Post() {
    const { id } = useParams();

    const {title, readTime, subtitle, author, created, content} = posts.find((post) => post.id.toString() === id);

    const formattedDate = formatDate(created);

    return (
        <>
            <h2>{title} ({readTime} minuten)</h2>
            <h3>{subtitle}</h3>
            <p>Geschreven door {author} op {formattedDate}</p>
            <p>{content}</p>
            <Link to="/alle-posts">Terug naar de overzichtspagina</Link>
        </>
    )
}

export default Post;