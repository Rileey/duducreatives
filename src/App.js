import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Works from './pages/works';

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
