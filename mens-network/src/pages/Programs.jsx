import { CalendarDays, ArrowUpRight, Shield, Award, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import retreatImg from '../assets/spain-retreat.jpg';
import './Programs.css';

const Programs = () => {
    return (
        <div className="programs-page">
            {/* Header */}
            <section className="page-header text-center">
                <div className="container animate-fade-in">
                    <CalendarDays size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">PROGRAMS AND EVENTS</h1>
                    <p className="lead max-w-800 mx-auto">
                        Discover the featured initiatives, academies, and gatherings designed to empower the brotherhood.
                    </p>
                </div>
            </section>

            {/* Featured Programs */}
            <section className="featured-programs section-padding container">
                <h2 className="text-center mb-5 text-accent">FEATURED PROGRAMS</h2>

                <div className="programs-grid">

                    {/* Brotherhood Meetups */}
                    <div className="program-card glass-card animate-fade-in delay-100">
                        <div className="program-header">
                            <Users size={40} className="text-accent" />
                            <span className="badge">Community</span>
                        </div>
                        <h3 className="mt-4 mb-3 text-accent">BROTHERHOOD MEETUPS</h3>
                        <p className="description mb-4">
                            Local gatherings where men connect, share experiences, and build meaningful relationships.
                        </p>
                        <div className="program-details box mb-4">
                            <ul className="agenda-list">
                                <li><strong>Structure:</strong> 1 Anchor & 5-10 Men</li>
                                <li><strong>Format:</strong> Meet twice per month (Check-in, Discussion topic, Anchor guidance, Growth commitments)</li>
                                <li><strong>Topics:</strong> Purpose, Fatherhood, Relationships, Financial discipline, Leadership, Faith.</li>
                            </ul>
                        </div>
                        <Link to="/system" className="btn btn-outline">Learn More <ArrowUpRight size={16} /></Link>
                    </div>

                    {/* Uplift Conference */}
                    <div className="program-card glass-card animate-fade-in delay-200">
                        <div className="program-header">
                            <Award size={40} className="text-accent" />
                            <span className="badge">Annual Event</span>
                        </div>
                        <h3 className="mt-4 mb-3 text-accent">UPLIFT MEN’S CONFERENCE</h3>
                        <p className="description mb-4">
                            A powerful gathering of men focused on leadership, resilience, mentorship, and brotherhood.
                        </p>

                        <div className="program-details box mb-4">
                            <h4 className="text-muted mb-3 font-body">Theme: <strong>RISE AGAIN</strong></h4>
                            <ul className="agenda-list">
                                <li><strong>Day 1:</strong> Brotherhood gathering, Leadership keynote, Men’s panel discussion</li>
                                <li><strong>Day 2:</strong> Workshops (Mental resilience, Faith and identity, Leadership and purpose)</li>
                                <li><strong>Day 3:</strong> Activation session (Vision setting, Brotherhood commitment, Anchor commissioning)</li>
                            </ul>
                        </div>
                        <Link to="/contact" className="btn btn-outline">Join the Waitlist <ArrowUpRight size={16} /></Link>
                    </div>

                    {/* Global Brotherhood Retreats */}
                    <div className="program-card glass-card animate-fade-in delay-300">
                        <div className="program-header">
                            <Globe size={40} className="text-accent" />
                            <span className="badge">Travel Experience</span>
                        </div>
                        <h3 className="mt-4 mb-3 text-accent">GLOBAL BROTHERHOOD RETREATS</h3>
                        <div className="retreat-flyer mt-3 mb-4">
                            <img src={retreatImg} alt="Backup Men's Retreat Spain 2026" className="responsive-img rounded-img" />
                        </div>
                        <p className="description mb-4">
                            Special retreats and travel experiences where men reconnect, recharge, and build strong relationships. Join us in Spain for our upcoming 2026 retreat!
                        </p>
                        <div className="program-details box mb-4">
                            <ul className="agenda-list">
                                <li><strong>Destination Trips:</strong> International holiday trips focusing on brotherhood and cultural exchange.</li>
                                <li><strong>Outdoor Retreats:</strong> Survival skills, challenging outdoor environments, men's camping circles.</li>
                                <li><strong>Wellness Retreats:</strong> Focus on mental rejuvenation, physical health, and emotional reset.</li>
                            </ul>
                        </div>
                        <Link to="/contact" className="btn btn-primary">Discover Retreats <ArrowUpRight size={16} /></Link>
                    </div>

                    {/* Leadership Networking Events */}
                    <div className="program-card glass-card animate-fade-in delay-100">
                        <div className="program-header">
                            <Shield size={40} className="text-accent" />
                            <span className="badge">Business & Leadership</span>
                        </div>
                        <h3 className="mt-4 mb-3 text-accent">LEADERSHIP NETWORKING EVENTS</h3>
                        <p className="description mb-4">
                            Professional networking sessions where men build partnerships and collaborate for growth.
                        </p>
                        <div className="program-details box mb-4">
                            <p className="text-muted">Equipping the next generation of Anchors and community pillars with advanced leadership tools, public speaking workshops, and high-level enterprise networking spaces.</p>
                        </div>
                        <Link to="/contact" className="btn btn-outline">View Events <ArrowUpRight size={16} /></Link>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Programs;
