import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Anchors from './pages/Anchors';
import System from './pages/System';
import Pathways from './pages/Pathways';
import Programs from './pages/Programs';
import Pillars from './pages/Pillars';
import Chapters from './pages/Chapters';
import Join from './pages/Join';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useScrollAnimation();

  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main className="main-content" style={{ minHeight: '80vh', paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/anchors" element={<Anchors />} />
          <Route path="/system" element={<System />} />
          <Route path="/pathways" element={<Pathways />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/pillars" element={<Pillars />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/join" element={<Join />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
