import React, { useEffect } from 'react';
import Style from './componenet/Style';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import About from './componenet/about/About';
import College from './componenet/colleges/College';
import Exams from './componenet/exam/Exams';
import GD from './componenet/gdpi/GD';
import Blog from './componenet/blogs/Blog';
import Careers from './componenet/career/Careers';
import Contact from './componenet/contact/Contact';
import PrivacyPolicy from './componenet/PrivacyPolicy';
import Terms from './componenet/Terms';
import Home from './componenet/home/Home';
import Aos from 'aos'
import SingleBlog from './componenet/blogs/SingleBlog';
import ScrollButton from './componenet/ScrollButton';
import PI from './componenet/gdpi/PI';
import Error404 from './componenet/Error404';
function App() {
  useEffect(() => {
    Aos.init(
      {
        delay: 100,
        duration: 900,
      }
    )
  }, [])
  return (
    <div className="App">
      <Router>
        <div className='page'>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/collegelist" element={<College />}></Route>
            <Route exact path="/exams" element={<Exams />}></Route>
            <Route exact path="/gd" element={<GD />}></Route>
            <Route exact path="/pi" element={<PI />}></Route>
            <Route exact path="/blog" element={<Blog />}></Route>
            <Route exact path="/blog/post" element={<SingleBlog />}></Route>
            <Route exact path="/careers" element={<Careers />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/pp" element={<PrivacyPolicy />}></Route>
            <Route exact path="/terms" element={<Terms />}></Route>
            <Route exact path='*' element={<Error404 />}></Route>
          </Routes>
        </div>
      </Router>
      <Style />
      <ScrollButton />
    </div>
  );
}

export default App;
