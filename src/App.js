import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Destination from "./Pages/Destination";
import SinglePage from "./Components/SinglePage";
import Blog from "./Pages/Blog";
import BlogSingle from "./Components/BlogSingle";
import Testimonial from "./Pages/Testimonial";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/destinations" element={<Destination />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogsingle/:id" element={<BlogSingle />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
