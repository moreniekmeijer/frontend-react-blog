import './App.css'
import logo from './assets/logo-white.png'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Overview from "./pages/overview/Overview.jsx";
import NewPost from "./pages/newPost/NewPost.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Post from "./pages/post/Post.jsx";

function App() {

    return (
        <>
            <Navigation/>
            <main className="page-container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/nieuwe-post" element={<NewPost/>}/>
                    <Route path="/alle-posts" element={<Overview/>}/>
                    <Route path="/post/:id" element={<Post/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
        </>
    )
}

export default App
