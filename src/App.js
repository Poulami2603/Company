import Home from "./Pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from "./Common/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Team from "./Core/About/Team";
import Portfolio from "./Pages/Portfolio";
import Pricing from "./Pages/Pricing";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Testimonial from "./Core/About/Testimonial";



function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/services" element={<Services/>}/>
      <Route exact path="/team" element={<Team/>}/>
      <Route exact path="/testimonial" element={<Testimonial/>}/>
      <Route exact path="/portfolio" element={<Portfolio/>}/>
      <Route exact path="/pricing" element={<Pricing/>}/>
      <Route exact path="/blog" element={<Blog/>}/>
      <Route exact path="/contact" element={<Contact/>}/>

    </Routes>
    <Footer/>
   </Router>
   </>
  );
}

export default App;
