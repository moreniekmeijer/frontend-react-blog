import {Link} from "react-router-dom";
import "./Overview.css"
import axios from "axios";
import {useEffect, useState} from "react";

function Overview() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(false);

    async function getPosts() {
        setLoading(true);
        setErrors(false);
        try {
            const result = await axios.get(`http://localhost:3000/posts`);
            setPosts(result.data);
            setErrors(false);
            setLoading(false);
        } catch (e) {
            console.error(e);
            setErrors(true);
            setLoading(false);
        }
    }

    useEffect(() => {
            void getPosts()
        }, []
    );

    return (
        <section className="overview">
            {loading && <p>Loading...</p>}
            {errors && <p>Er is iets misgegaan bij het laden van de posts...</p>}
            {posts.length > 0 && (
                <>
                    <h2>Bekijk de {posts.length} posts op de pagina</h2>
                    <ul className="post-list">
                        {posts.map(post => {
                            return (
                                <li key={post.id} className="post-item">
                                    <h3><Link to={`/post/${post.id}`}>{post.title}</Link> ({post.author})</h3>
                                    <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                                </li>
                            )
                        })}
                    </ul>
                </>)}
        </section>
    )
}

export default Overview;