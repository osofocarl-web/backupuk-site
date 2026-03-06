import { Link } from 'react-router-dom';
import { Globe, Map, Building, MapPin, Users, CalendarDays, Key, Award } from 'lucide-react';
import './Chapters.css';

const Chapters = () => {
    return (
        <div className="chapters-page">
            {/* Header */}
            <section className="page-header text-center">
                <div className="container animate-fade-in">
                    <Globe size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">A GLOBAL BROTHERHOOD</h1>
                    <p className="lead max-w-800 mx-auto">
                        Backup Men’s Network is growing into a global movement of men supporting one another to rise stronger.
                    </p>
                    <p className="description text-muted max-w-800 mx-auto mt-3">
                        Through local chapters, national networks, and international conferences, men can connect with brothers around the world. Wherever life takes you, the brotherhood is there.
                    </p>
                </div>
            </section>

            {/* Chapter Structure */}
            <section className="structure-section section-padding container">
                <h2 className="text-center text-accent mb-3">EXPANSION MODEL</h2>
                <p className="lead text-center max-w-600 mx-auto mb-5">
                    To build a worldwide brotherhood, Backup Men’s Network operates through city and national chapters.
                </p>

                <div className="structure-grid">

                    {/* Global */}
                    <div className="structure-node glass-card animate-fade-in delay-100">
                        <div className="node-icon">
                            <Globe size={32} className="text-accent" />
                        </div>
                        <h3>GLOBAL NETWORK</h3>
                        <p className="subtext text-accent mb-3">Backup Men’s Network International</p>
                        <p className="description text-muted">
                            Oversees the global vision, leadership development, and expansion strategy.
                        </p>
                    </div>

                    {/* Regional */}
                    <div className="structure-node glass-card animate-fade-in delay-200">
                        <div className="node-icon">
                            <Map size={32} className="text-accent" />
                        </div>
                        <h3>REGIONAL CHAPTERS</h3>
                        <p className="subtext text-accent mb-3">e.g., Backup Men UK, Backup Men Africa</p>
                        <p className="description text-muted">
                            Coordinating activities, conferences, and resource distribution across countries within a specific continent or region.
                        </p>
                    </div>

                    {/* National */}
                    <div className="structure-node glass-card animate-fade-in delay-300">
                        <div className="node-icon">
                            <Building size={32} className="text-accent" />
                        </div>
                        <h3>NATIONAL CHAPTERS</h3>
                        <p className="subtext text-accent mb-3">e.g., United Kingdom, Ghana, United States</p>
                        <p className="description text-muted">
                            Organizing national conferences, large-scale networking events, and overseeing the comprehensive leadership programs for their nation.
                        </p>
                    </div>

                    {/* City */}
                    <div className="structure-node glass-card animate-fade-in delay-100">
                        <div className="node-icon">
                            <MapPin size={32} className="text-accent" />
                        </div>
                        <h3>CITY CHAPTERS</h3>
                        <p className="subtext text-accent mb-3">e.g., Backup London, Backup Accra</p>
                        <p className="description text-muted">
                            The heartbeat of the brotherhood. City chapters host local mentorship circles, weekly brotherhood meetups, and community activities.
                        </p>
                    </div>

                </div>
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
