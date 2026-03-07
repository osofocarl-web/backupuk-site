import { Link } from 'react-router-dom';
import { ArrowRight, Anchor, Target, Users, Globe, Briefcase, MapPin, Building } from 'lucide-react';
import impactData from '../data/impact.json';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content animate-fade-in">
                    <p className="hero-eyebrow text-accent">No man should stay down.</p>
                    <h1 className="hero-title">
                        <span>RISE AGAIN.</span>
                        <br />
                        <span>STRONGER TOGETHER.</span>
                    </h1>
                    <p className="hero-subtitle delay-100">
                        Backup Men’s Network is a global brotherhood empowering men to rise, rebuild, and thrive through mentorship, networking, and community support.
                    </p>
                    <p className="hero-strong delay-200">
                        Through Anchors, brotherhood circles, conferences, and global networking opportunities, we ensure that no man walks alone.
                    </p>

                    <div className="hero-actions delay-300">
                        <Link to="/join" className="btn btn-primary">
                            Join the Brotherhood <ArrowRight size={18} />
                        </Link>
                        <Link to="/contact" className="btn btn-outline">
                            Find an Anchor
                        </Link>
                    </div>
                </div>
            </section>

            {/* Global Networking Section (NEW) */}
            <section className="networking-section section-padding">
                <div className="container">
                    <div className="networking-grid">
                        <div className="networking-content animate-fade-in">
                            <Globe size={48} className="text-accent mb-4" />
                            <h2 className="text-accent mb-4">A GLOBAL NETWORK OF MEN</h2>
                            <p className="lead mb-4">
                                Backup Men’s Network is more than mentorship. It is a <strong>global network of men committed to supporting one another to thrive.</strong>
                            </p>
                            <p className="description mb-4">
                                We believe that when men connect, collaborate, and support each other, everyone rises stronger.
                            </p>

                            <ul className="grid-list">
                                <li><Users className="text-accent" size={20} /> Networking events</li>
                                <li><Target className="text-accent" size={20} /> Leadership conferences</li>
                                <li><Anchor className="text-accent" size={20} /> Brotherhood meetups</li>
                                <li><Users className="text-accent" size={20} /> Mentorship circles</li>
                                <li><Globe className="text-accent" size={20} /> Global retreats & holiday trips</li>
                                <li><Briefcase className="text-accent" size={20} /> Professional growth gatherings</li>
                            </ul>

                            <div className="highlight-box mt-5 p-4 inline-block">
                                <p className="lead text-accent m-0">
                                    Together we create an environment where men <strong>grow, build, and thrive together.</strong>
                                </p>
                            </div>
                        </div>
                        {/* Can add an image container here later if desired, for now just keeping it wide or centered */}
                    </div>
                </div>
            </section>

            {/* Brotherhood Impact Dashboard / Momentum Section */}
            <section className="momentum-section section-padding" style={{ backgroundColor: '#050505', position: 'relative' }}>
                <div className="container text-center max-w-1200 mx-auto">
                    <h2 className="text-accent mb-3" style={{ fontSize: '2.5rem', letterSpacing: '2px' }}>BROTHERHOOD WITHOUT BORDERS</h2>
                    <p className="lead max-w-800 mx-auto mb-5">
                        We are rapidly expanding across cities and continents. From London to Accra, New York to Johannesburg—men are rising together globally.
                    </p>

                    {/* Impact Metrics Grid */}
                    <div className="grid-responsive gap-4 mb-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                        <div className="glass-card p-5 animate-fade-in delay-100 text-center border-b-4 border-accent">
                            <h3 className="text-4xl font-bold text-white mb-2" style={{ fontSize: '3rem' }}>{impactData.men_in_network.toLocaleString()}+</h3>
                            <p className="text-accent uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2"><Users size={16} /> Men in Network</p>
                        </div>
                        <div className="glass-card p-5 animate-fade-in delay-200 text-center border-b-4 border-accent">
                            <h3 className="text-4xl font-bold text-white mb-2" style={{ fontSize: '3rem' }}>{impactData.cities_reached.toLocaleString()}</h3>
                            <p className="text-accent uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2"><MapPin size={16} /> Cities Reached</p>
                        </div>
                        <div className="glass-card p-5 animate-fade-in delay-300 text-center border-b-4 border-accent">
                            <h3 className="text-4xl font-bold text-white mb-2" style={{ fontSize: '3rem' }}>{impactData.events_hosted.toLocaleString()}</h3>
                            <p className="text-accent uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2"><Globe size={16} /> Events Hosted</p>
                        </div>
                        <div className="glass-card p-5 animate-fade-in delay-400 text-center border-b-4 border-accent">
                            <h3 className="text-4xl font-bold text-white mb-2" style={{ fontSize: '3rem' }}>{impactData.active_anchors.toLocaleString()}</h3>
                            <p className="text-accent uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2"><Anchor size={16} /> Active Mentors</p>
                        </div>
                    </div>

                    {/* Map Exploration Gateway */}
                    <div className="glass-card max-w-1000 mx-auto p-5 mb-5" style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                        <div style={{ height: '250px', width: '100%', background: 'radial-gradient(circle at center, rgba(201,147,59,0.15) 0%, transparent 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Globe size={64} style={{ color: 'rgba(201,147,59,0.5)' }} className="mb-4 animate-pulse" />
                            <h3 className="text-white mb-4">View the International Footprint</h3>
                            <Link to="/chapters" className="btn btn-primary btn-lg" style={{ boxShadow: '0 0 30px rgba(201,147,59,0.3)' }}>
                                Launch Global Explorer Map
                            </Link>
                        </div>
                    </div>

                    {/* Growth Funnel CTAs */}
                    <div className="mt-5 glass-card p-5 max-w-1000 mx-auto flex flex-col items-center border border-accent/20 bg-accent/5">
                        <h3 className="text-accent mb-2">Build The Movement</h3>
                        <p className="text-gray-300 mb-4 text-center max-w-600">
                            Is the brotherhood not active in your city yet? Take the lead. We provide the blueprint, training, and global support for you to pioneer the movement locally.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Link to="/start-chapter" className="btn btn-primary flex items-center gap-2"><Building size={18} /> Start a Chapter</Link>
                            <Link to="/host-event" className="btn btn-outline flex items-center gap-2 text-white border-white"><Target size={18} /> Host a Backup Gathering</Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* Welcome Section (John Carl Acquah) */}
            <section className="welcome-section section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="welcome-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center' }}>
                        <div className="welcome-image animate-fade-in" style={{ textAlign: 'center' }}>
                            <img
                                src="/john-carl-acquah.jpg"
                                alt="Pastor John Carl Acquah"
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    height: 'auto',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                                    border: '2px solid var(--color-gold-muted)'
                                }}
                            />
                        </div>
                        <div className="welcome-content animate-fade-in delay-100">
                            <h2 className="text-accent mb-4">MEET YOUR CONVENOR</h2>
                            <h3 className="mb-2" style={{ fontSize: '1.5rem', color: 'var(--color-text)' }}>Pastor John Carl Acquah</h3>
                            <p className="text-accent mb-4" style={{ fontWeight: '600' }}>Convenor, Psychologist, and Community Advocate</p>

                            <p className="description mb-3">
                                Welcome to Backup Men’s Network. I'm Pastor John Carl Acquah, and my passion is helping men rediscover their strength, find their purpose, and build meaningful brotherhood.
                            </p>
                            <p className="description mb-3">
                                With over three decades of pastoral leadership and community work, I’ve dedicated my life to empowering men like you to overcome life’s hurdles and rebuild with real confidence. As a trained counsellor and psychologist, I believe in bridging theological insight with psychological understanding—supporting your emotional, spiritual, and personal growth all at once.
                            </p>
                            <p className="description mb-3">
                                Whether through mentorship, networking events, or brotherhood circles, my goal is to create spaces where you can connect, grow, and thrive. You don't have to face life's pressures alone.
                            </p>

                            <blockquote style={{ borderLeft: '4px solid var(--color-gold)', paddingLeft: '1rem', marginTop: '1.5rem', fontStyle: 'italic', fontSize: '1.1rem' }}>
                                "Helping men rise, rebuild, and move forward—together."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Backup Section */}
            <section className="section-padding container why-section">
                <div className="why-text animate-fade-in">
                    <h2 className="text-accent text-center mb-4">WHY BACKUP MEN’S NETWORK</h2>
                    <p className="lead text-center mb-4">Many men carry pressure silently.</p>
                    <ul className="pressure-list justify-center max-w-600 mx-auto">
                        <li>Responsibility.</li>
                        <li>Family expectations.</li>
                        <li>Financial stress.</li>
                        <li>Emotional battles.</li>
                        <li>Loss.</li>
                        <li>Failure.</li>
                    </ul>
                    <p className="description mt-4 text-center">
                        When life knocks a man down, society often expects him to simply get up and move on.
                        But real strength comes from <strong>support, brotherhood, and guidance</strong>.
                    </p>
                    <p className="description highlight-text text-center mx-auto mt-4 max-w-800">
                        Backup Men’s Network exists to provide that support system so that <strong>no man remains down.</strong>
                    </p>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works">
                <div className="container section-padding">
                    <h2 className="text-center text-accent mb-4">HOW IT WORKS</h2>
                    <div className="steps-grid">
                        <div className="step-card glass-card">
                            <Users className="step-icon text-accent" size={40} />
                            <h3>CONNECT</h3>
                            <p>Join the brotherhood and become part of a community of men committed to growth and resilience.</p>
                        </div>

                        <div className="step-card glass-card">
                            <Anchor className="step-icon text-accent" size={40} />
                            <h3>MATCH WITH AN ANCHOR</h3>
                            <p>Experienced mentors known as <strong>Anchors</strong> walk alongside you, offering wisdom, guidance, and accountability.</p>
                        </div>

                        <div className="step-card glass-card">
                            <Target className="step-icon text-accent" size={40} />
                            <h3>RISE AGAIN</h3>
                            <p>Through mentorship, brotherhood circles, and empowerment programs, men rebuild confidence and purpose.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section-padding text-center">
                <div className="container">
                    <h2 className="text-accent mb-3">No man should walk alone.</h2>
                    <p className="lead mb-4">Join the Backup brotherhood today and take the next step toward strength, purpose, and restoration.</p>
                    <Link to="/join" className="btn btn-primary btn-lg">Join Now</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
