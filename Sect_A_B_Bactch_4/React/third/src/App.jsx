import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favorite from "./pages/Favorite";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import BlogDetials from "./pages/BlogDetials";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blogDetails/:id" element={<BlogDetials />} />
      </Routes>
    </>
  );
}

export default App;
