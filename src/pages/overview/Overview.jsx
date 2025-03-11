import posts from '../../constants/data.json';
import {Link} from "react-router-dom";
import "./Overview.css"

function Overview() {
    return (
        <section className="overview">
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
        </section>
    )
}

export default Overview;