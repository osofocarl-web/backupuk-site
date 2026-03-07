import { useState, useMemo, lazy, Suspense } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Globe, MapPin, Search, Calendar, Users, ArrowRight } from 'lucide-react';
import chaptersData from '../data/chapters.json';
import eventsData from '../data/events.json';
import citiesData from '../data/cities.json';
import './Chapters.css';

// Lazy load the heavy map to preserve Lighthouse scores
const GlobalMap = lazy(() => import('../components/GlobalMap'));

const Chapters = () => {
    const navigate = useNavigate();
    const [selectedContinent, setSelectedContinent] = useState('All');
    const [activeFilter, setActiveFilter] = useState('All'); // 'All', 'Chapters', 'Events', 'Emerging'

    // Filter Logic
    const displayedChapters = useMemo(() => {
        return chaptersData.filter(c =>
            (selectedContinent === 'All' || c.continent === selectedContinent) &&
            (activeFilter === 'All' || activeFilter === 'Chapters')
        );
    }, [selectedContinent, activeFilter]);

    const displayedEvents = useMemo(() => {
        return eventsData.filter(e =>
            (selectedContinent === 'All' || e.continent === selectedContinent) &&
            (activeFilter === 'All' || activeFilter === 'Events')
        );
    }, [selectedContinent, activeFilter]);

    const displayedCities = useMemo(() => {
        return citiesData.filter(c =>
            (selectedContinent === 'All' || c.continent === selectedContinent) &&
            (activeFilter === 'All' || activeFilter === 'Emerging')
        );
    }, [selectedContinent, activeFilter]);

    const handleMarkerClick = (slug) => {
        // Find if it's a chapter and route to dynamic page, otherwise scroll
        const isChapter = chaptersData.find(c => c.slug === slug);
        if (isChapter) {
            navigate(`/chapters/${slug}`);
        } else {
            // It's an event or city, jump to directory
            document.getElementById('directory-grid').scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="chapters-page">
            <section className="page-header text-center" style={{ paddingBottom: '2rem' }}>
                <div className="container animate-fade-in">
                    <h1 className="text-accent" style={{ fontSize: '3rem', letterSpacing: '2px' }}>RISING ACROSS THE WORLD</h1>
                    <p className="lead max-w-800 mx-auto">
                        Brotherhood without borders. Explore active chapters, global summits, and emerging cities.
                    </p>
                </div>
            </section>

            {/* Interactive Flagship Map Section */}
            <section className="map-container relative container max-w-1200 mx-auto" style={{ height: '60vh', minHeight: '400px', backgroundColor: '#0a0a0a', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                <Suspense fallback={<div className="flex items-center justify-center h-full w-full"><Globe size={40} className="animate-spin text-accent" /></div>}>
                    <GlobalMap
                        chapters={displayedChapters}
                        events={displayedEvents}
                        cities={displayedCities}
                        onMarkerClick={handleMarkerClick}
                    />
                </Suspense>

                {/* Floating Map Controls */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10" style={{ zIndex: 10 }}>
                    <div className="glass-card p-2 flex gap-2">
                        {['All', 'North America', 'Europe', 'Africa', 'Oceania'].map(cont => (
                            <button
                                key={cont}
                                onClick={() => setSelectedContinent(cont)}
                                className={`px-3 py-1 text-sm rounded transition-colors ${selectedContinent === cont ? 'bg-accent text-white' : 'text-gray-400 hover:text-white'}`}
                                style={{ backgroundColor: selectedContinent === cont ? 'var(--color-accent)' : 'transparent' }}
                            >
                                {cont}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Floating Target Action */}
                <div className="absolute bottom-4 right-4 z-10" style={{ zIndex: 10 }}>
                    <div className="glass-card p-4 text-center border-accent border">
                        <h4 className="text-accent mb-2">Bring Backup to Your City</h4>
                        <p className="text-sm mb-3">No pins near you? Be the pioneer.</p>
                        <Link to="/host-event" className="btn btn-primary btn-sm">Host an Event</Link>
                    </div>
                </div>
            </section>

            {/* Companion Directory */}
            <section id="directory-grid" className="section-padding container">
                <div className="flex justify-between items-center mb-5 border-b pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <h2>GLOBAL DIRECTORY</h2>
                    <div className="flex gap-3">
                        {['All', 'Chapters', 'Events', 'Emerging'].map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded font-bold transition-all ${activeFilter === filter ? 'text-accent border-b-2 border-accent' : 'text-gray-500 hover:text-white'}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid-responsive gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>

                    {/* Render Chapters */}
                    {(activeFilter === 'All' || activeFilter === 'Chapters') && displayedChapters.map(chapter => (
                        <div key={chapter.slug} className="glass-card p-5 animate-fade-in group hover:border-accent transition-colors" style={{ animationDuration: '0.3s' }}>
                            <div className="flex justify-between items-start mb-3">
                                <span className="bg-accent text-white text-xs px-2 py-1 rounded uppercase tracking-wider">Active Chapter</span>
                            </div>
                            <h3 className="mb-1">{chapter.city}, {chapter.country}</h3>
                            <p className="text-sm text-gray-400 mb-4">{chapter.description}</p>
                            <div className="flex items-center gap-2 mb-4 text-sm">
                                <Users size={16} className="text-accent" /> Host: {chapter.local_host_name}
                            </div>
                            <Link to={`/chapters/${chapter.slug}`} className="btn btn-outline w-full flex justify-center items-center gap-2">
                                Enter Chapter <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}

                    {/* Render Events */}
                    {(activeFilter === 'All' || activeFilter === 'Events') && displayedEvents.map((evt, idx) => (
                        <div key={`evt-card-${idx}`} className="glass-card p-5 animate-fade-in group hover:border-green-500 transition-colors">
                            <div className="flex justify-between items-start mb-3">
                                <span className="text-xs px-2 py-1 rounded uppercase tracking-wider" style={{ backgroundColor: 'rgba(74, 222, 128, 0.2)', color: '#4ade80' }}>Global Event</span>
                            </div>
                            <h3 className="mb-1">{evt.title}</h3>
                            <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
                                <MapPin size={16} color="#4ade80" /> {evt.city}, {evt.country}
                            </div>
                            <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                                <Calendar size={16} color="#4ade80" /> {new Date(evt.event_date).toLocaleDateString()}
                            </div>
                            <Link to={evt.registration_link} className="btn w-full flex justify-center items-center gap-2" style={{ border: '1px solid #4ade80', color: '#4ade80' }}>
                                Register
                            </Link>
                        </div>
                    ))}

                    {/* Render Emerging */}
                    {(activeFilter === 'All' || activeFilter === 'Emerging') && displayedCities.map((city, idx) => (
                        <div key={`emerg-card-${idx}`} className="glass-card p-5 animate-fade-in" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderStyle: 'dashed' }}>
                            <div className="flex justify-between items-start mb-3">
                                <span className="text-gray-400 text-xs px-2 py-1 rounded uppercase tracking-wider bg-gray-800">Emerging Zone</span>
                            </div>
                            <h3 className="mb-2 text-gray-300">{city.city}, {city.country}</h3>
                            <p className="text-sm text-gray-500 mb-4">High interest recorded. We are looking for a pioneering Anchor to host the first gathering.</p>
                            <Link to="/host-event" className="btn btn-outline w-full text-sm">
                                Host First Gathering
                            </Link>
                        </div>
                    ))}

                </div>
            </section>
        </div>
    );
};

export default Chapters;
