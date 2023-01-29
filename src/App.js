import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import ContactUs from './pages/Contact Us/ContactUs';
import TechnologyBlog from './components/All Blogs/Technology/TechnologyBlog';
import SoftwareTestingBlog from './components/All Blogs/SoftwareTesting/SoftwareTestingBlog';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/technologyBlog" element={<TechnologyBlog />} />
          <Route exact path="/softwareTestingBlog" element={<SoftwareTestingBlog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
