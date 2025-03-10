import './App.css'
import logo from './assets/logo-white.png'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Overview from "./pages/overview/Overview.jsx";
import NewPost from "./pages/newPost/NewPost.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Navigation from "./components/navigation/Navigation.jsx";

function App() {
    return (
        <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/nieuwe-post" element={<NewPost/>}/>
                <Route path="/alle-posts" element={<Overview/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

export default App
