import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { lazy, Suspense } from 'react';

// Pages - Lazy Loaded for Aggressive Code Splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Anchors = lazy(() => import('./pages/Anchors'));
const System = lazy(() => import('./pages/System'));
const Pathways = lazy(() => import('./pages/Pathways'));
const Programs = lazy(() => import('./pages/Programs'));
const Pillars = lazy(() => import('./pages/Pillars'));
const Chapters = lazy(() => import('./pages/Chapters'));
const ChapterDetail = lazy(() => import('./pages/ChapterDetail'));
const Events = lazy(() => import('./pages/Events'));
const HostEvent = lazy(() => import('./pages/HostEvent'));
const BecomeAnchor = lazy(() => import('./pages/BecomeAnchor'));
const Join = lazy(() => import('./pages/Join'));
const Resources = lazy(() => import('./pages/Resources'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Support = lazy(() => import('./pages/Support'));
const Contact = lazy(() => import('./pages/Contact'));
const Invite = lazy(() => import('./pages/Invite'));

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
        <Suspense fallback={
          <div style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '40px', height: '40px', border: '3px solid rgba(201, 147, 59, 0.2)', borderTopColor: 'var(--color-accent, #c9933b)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/anchors" element={<Anchors />} />
            <Route path="/system" element={<System />} />
            <Route path="/pathways" element={<Pathways />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/pillars" element={<Pillars />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/chapters/:slug" element={<ChapterDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/host-event" element={<HostEvent />} />
            <Route path="/become-anchor" element={<BecomeAnchor />} />
            <Route path="/join" element={<Join />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/invite" element={<Invite />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App;
