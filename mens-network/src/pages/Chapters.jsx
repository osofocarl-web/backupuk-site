import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Building, ChevronRight } from 'lucide-react';
import './Chapters.css';

const globalDirectory = {
    "Africa": {
        "Ghana": ["Backup Accra", "Backup Kumasi", "Backup Takoradi"],
        "Nigeria": ["Backup Lagos", "Backup Abuja", "Backup Port Harcourt"],
        "South Africa": ["Backup Johannesburg", "Backup Cape Town"]
    },
    "Europe": {
        "United Kingdom": ["Backup London", "Backup Manchester", "Backup Birmingham"],
        "Germany": ["Backup Berlin", "Backup Munich"]
    },
    "North America": {
        "United States": ["Backup New York", "Backup Atlanta", "Backup Houston", "Backup Los Angeles"],
        "Canada": ["Backup Toronto", "Backup Vancouver"]
    },
    "Oceania": {
        "Australia": ["Backup Sydney", "Backup Melbourne"]
    }
};

const Chapters = () => {
    const [selectedContinent, setSelectedContinent] = useState(null);
    const [selectedNation, setSelectedNation] = useState(null);

    return (
        <div className="chapters-page">
            <section className="page-header text-center">
                <div className="container animate-fade-in">
                    <Globe size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">GLOBAL CHAPTERS DIRECTORY</h1>
                    <p className="lead max-w-800 mx-auto">
                        A worldwide brotherhood. Find a Backup Men's chapter near you or pioneer one in your city.
                    </p>
                </div>
            </section>

            <section className="directory-section section-padding container">

                {/* 1. Continents */}
                <h2 className="text-accent mb-4 text-center">1. Select Region</h2>
                <div className="grid-responsive mb-5">
                    {Object.keys(globalDirectory).map(continent => (
                        <div
                            key={continent}
                            className={`glass-card p-4 text-center cursor-pointer transition ${selectedContinent === continent ? 'border-accent' : ''}`}
                            onClick={() => { setSelectedContinent(continent); setSelectedNation(null); }}
                            style={{ cursor: 'pointer', border: selectedContinent === continent ? '2px solid var(--color-accent)' : '2px solid transparent' }}
                        >
                            <Globe size={32} className="text-accent mx-auto mb-3" />
                            <h3>{continent}</h3>
                        </div>
                    ))}
                </div>

                {/* 2. Nations */}
                {selectedContinent && (
                    <div className="animate-fade-in mb-5">
                        <h2 className="text-accent mb-4 text-center">2. Select Nation</h2>
                        <div className="grid-responsive">
                            {Object.keys(globalDirectory[selectedContinent]).map(nation => (
                                <div
                                    key={nation}
                                    className={`glass-card p-4 text-center cursor-pointer transition ${selectedNation === nation ? 'border-accent' : ''}`}
                                    onClick={() => setSelectedNation(nation)}
                                    style={{ cursor: 'pointer', border: selectedNation === nation ? '2px solid var(--color-accent)' : '2px solid transparent' }}
                                >
                                    <Building size={32} className="text-accent mx-auto mb-3" />
                                    <h3>{nation}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 3. Cities */}
                {selectedContinent && selectedNation && (
                    <div className="animate-fade-in">
                        <h2 className="text-accent mb-4 text-center">3. Active City Chapters</h2>
                        <div className="grid-responsive">
                            {globalDirectory[selectedContinent][selectedNation].map(city => (
                                <div key={city} className="glass-card p-4 flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <MapPin size={24} className="text-accent" />
                                        <h3 style={{ margin: 0 }}>{city}</h3>
                                    </div>
                                    <Link to={`/join?chapter=${encodeURIComponent(city)}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                        Join
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-5 p-4 glass-card">
                            <h3 className="text-accent mb-2">City Not Listed?</h3>
                            <p className="mb-4">Become a pioneer and establish the brotherhood in your city.</p>
                            <Link to="/host-event" className="btn btn-outline">Start a Chapter Here</Link>
                        </div>
                    </div>
                )}

            </section>

            {/* Leadership & Activities Split */}
            <section className="ops-section section-padding">
                <div className="container">
                    <div className="ops-grid">

                        {/* Leadership Structure */}
                        <div className="ops-card glass-card">
                            <h2 className="text-accent mb-4"><Key className="inline-icon" size={28} /> CHAPTER LEADERSHIP</h2>
                            <p className="description mb-4">Each chapter is guided by a dedicated team of coordinators ensuring the vision is executed flawlessly.</p>
                            <ul className="custom-list">
                                <li><strong>Chapter Leader:</strong> Oversees the local vision.</li>
                                <li><strong>Anchor Coordinator:</strong> Manages mentorship.</li>
                                <li><strong>Events Coordinator:</strong> Organizes meetups.</li>
                                <li><strong>Networking Coordinator:</strong> Facilitates connections.</li>
                                <li><strong>Membership Coordinator:</strong> Welcomes new men.</li>
                            </ul>
                        </div>

                        {/* Activities */}
                        <div className="ops-card glass-card">
                            <h2 className="text-accent mb-4"><CalendarDays className="inline-icon" size={28} /> CHAPTER ACTIVITIES</h2>
                            <p className="description mb-4">Consistent, high-impact gatherings keep the brotherhood strong and focused.</p>
                            <ul className="custom-list">
                                <li>Monthly brotherhood meetups</li>
                                <li>Leadership networking events</li>
                                <li>Anchor mentorship circles</li>
                                <li>Community outreach projects</li>
                                <li>Men’s retreats and travel experiences</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Global Membership & Future Events */}
            <section className="future-section section-padding container text-center">
                <Award size={40} className="text-accent mb-4 mx-auto" />
                <h2 className="text-accent mb-4">THE FUTURE CLOSER THAN YOU THINK</h2>
                <div className="max-w-800 mx-auto glass-card p-5">
                    <p className="lead mb-4">
                        Membership allows men to connect across different regions and participate in events worldwide. You join a local chapter, but belong to a global network.
                    </p>
                    <div className="divider my-4"></div>
                    <h4 className="text-accent mb-3">UPCOMING GLOBAL EVENTS</h4>
                    <div className="events-list">
                        <span className="event-pill">Global Men’s Summit</span>
                        <span className="event-pill">International Retreats</span>
                        <span className="event-pill">Leadership Conferences</span>
                        <span className="event-pill">Global Networking Forums</span>
                    </div>
                </div>
            </section>

            {/* Slogan & CTA */}
            <section className="cta-section section-padding text-center">
                <div className="container">
                    <h2 className="mb-3 text-accent" style={{ fontSize: '2.5rem', fontWeight: 800 }}>
                        Strong Men.<br />
                        Strong Networks.<br />
                        Stronger Futures.
                    </h2>
                    <p className="lead mt-4 mb-4">Find your chapter. Join the movement.</p>
                    <Link to="/join" className="btn btn-primary btn-lg">Join the Brotherhood</Link>
                </div>
            </section>
        </div>
    );
};

export default Chapters;
