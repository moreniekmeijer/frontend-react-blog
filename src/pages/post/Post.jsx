import {Link, useParams} from "react-router-dom";
import formatDate from "../../helpers/formatDate.js";
import {useEffect, useState} from "react";
import axios from "axios";

function Post() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(false);
    const [post, setPost] = useState([]);

    async function getPostById() {
        setLoading(true);
        setErrors(false);
        try {
            const result = await axios.get(`http://localhost:3000/posts/${id}`);
            setPost(result.data);
            setLoading(false);
        } catch (e) {
            console.error(e);
            setErrors(true);
            setLoading(false);
        }
    }

    useEffect(() => {
            void getPostById()
        }, [id]
    );

    const {title, readTime, subtitle, author, created, content} = post;

    const formattedDate = formatDate(created);

    return (
        <>
            {loading && <p>Loading...</p>}
            {errors && <p>Er is iets misgegaan bij het laden van de post...</p>}
            <h2>{title} ({readTime} minuten)</h2>
            <h3>{subtitle}</h3>
            <p>Geschreven door {author} op {formattedDate}</p>
            <p>{content}</p>
            <Link to="/alle-posts">Terug naar de overzichtspagina</Link>
        </>
    )
}

export default Post;