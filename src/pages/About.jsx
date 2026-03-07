import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Globe, Users, ArrowRight } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Header */}
            <section className="page-header text-center">
                <div className="container animate-fade-in">
                    <ShieldCheck size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">ABOUT US</h1>
                    <p className="lead max-w-800 mx-auto">
                        A global brotherhood where men support one another through every season of life.
                    </p>
                </div>
            </section>

            {/* Narrative Section */}
            <section className="story-section section-padding">
                <div className="container">
                    <div className="narrative-content animate-fade-in delay-100">
                        <h2 className="text-center text-accent mb-4">OUR STORY</h2>
                        <p className="description">
                            Backup Men’s Network was founded with a clear vision: To create a <strong>global brotherhood where men support one another through every season of life.</strong>
                        </p>
                        <p className="description">
                            Men today face immense pressures — leadership responsibilities, financial expectations, family commitments, emotional challenges, and personal struggles. Yet many face these challenges alone.
                        </p>
                        <p className="description text-accent text-center mt-4">
                            Backup Men’s Network exists to change that.
                        </p>
                        <p className="description">
                            Through mentorship, brotherhood, networking, and empowerment programs, we create a strong support system that helps men rise again.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values Grid */}
            <section className="mvv-section section-padding">
                <div className="container">
                    <div className="mvv-grid">

                        <div className="mvv-card glass-card animate-fade-in delay-100">
                            <Target size={40} className="text-accent mb-4" />
                            <h3>MISSION</h3>
                            <p>
                                To empower men through mentorship, brotherhood, networking, and leadership development so they can rise stronger and thrive in every area of life.
                            </p>
                        </div>

                        <div className="mvv-card glass-card animate-fade-in delay-200">
                            <Globe size={40} className="text-accent mb-4" />
                            <h3>VISION</h3>
                            <p>
                                To build a global network of men who support one another to grow, lead, and thrive together.
                            </p>
                        </div>

                        <div className="mvv-card glass-card animate-fade-in delay-300">
                            <Users size={40} className="text-accent mb-4" />
                            <h3>WHAT WE BELIEVE</h3>
                            <ul className="values-list">
                                <li>No man should struggle alone.</li>
                                <li>Brotherhood strengthens resilience.</li>
                                <li>Networking opens doors to growth.</li>
                                <li>Mentorship accelerates transformation.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Networking Section */}
            <section className="networking-detail-section section-padding">
                <div className="container text-center max-w-900 mx-auto">
                    <Globe size={48} className="text-accent mb-4 mx-auto" />
                    <h2 className="text-accent mb-4">GLOBAL NETWORKING FOR MEN</h2>
                    <p className="lead mb-4">Networking is a core pillar of Backup Men’s Network.</p>
                    <p className="description mb-4">We believe strong relationships create powerful opportunities for growth. Backup provides a platform for men to connect across cities, countries, and professions.</p>

                    <div className="networking-perks-grid mt-5">
                        <div className="perk-box glass-card">
                            <h4 className="text-accent">Access to:</h4>
                            <ul className="grid-list-small">
                                <li>Professional connections</li>
                                <li>Leadership collaborations</li>
                                <li>Business opportunities</li>
                                <li>Friendship and brotherhood</li>
                            </ul>
                        </div>
                        <div className="perk-box glass-card">
                            <h4 className="text-accent">Global Events:</h4>
                            <ul className="grid-list-small">
                                <li>Leadership networking dinners</li>
                                <li>Brotherhood meetups</li>
                                <li>Global conferences</li>
                                <li>Men’s retreats & Holiday experiences</li>
                            </ul>
                        </div>
                    </div>
                    <p className="lead text-accent mt-5">Together we create opportunities for men to <br /><strong>connect, grow, and thrive globally.</strong></p>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="leadership-section section-padding">
                <div className="container">
                    <h2 className="text-center text-accent mb-5">LEADERSHIP TEAM</h2>
                    <p className="lead text-center max-w-800 mx-auto mb-5">
                        Backup Men’s Network is led by a dedicated team committed to empowering men and strengthening communities.
                    </p>

                    <div className="leadership-grid">

                        {/* Founder */}
                        <div className="leader-card glass-card featured-leader">
                            <div className="leader-header">
                                <h3>John Carl Acquah</h3>
                                <span className="badge">Convenor</span>
                            </div>
                            <p className="leader-roles text-accent">Psychologist | Community Advocate | Conference Speaker</p>
                            <p className="description mt-3">
                                John Carl Acquah is the convenor behind Backup Men’s Network. With a background in psychology, leadership, and community development, he is passionate about helping men rediscover purpose, resilience, and strength.
                            </p>
                            <p className="description mt-2">
                                Through mentorship, conferences, and leadership initiatives, he works to build a global brotherhood where men support one another to thrive.
                            </p>
                        </div>

                        {/* Coordinators Grid */}
                        <div className="coordinators-grid">

                            <div className="leader-card glass-card">
                                <div className="leader-header">
                                    <h3>William Acquah</h3>
                                    <span className="badge">Coordinator</span>
                                </div>
                                <p className="description mt-3">
                                    William is the leader of SpeakIT. He has experience in networking and providing support for men going through trauma, depression, and anxiety.
                                </p>
                            </div>

                            <div className="leader-card glass-card">
                                <div className="leader-header">
                                    <h3>Pastor Phil</h3>
                                    <span className="badge">Coordinator</span>
                                </div>
                                <p className="description mt-3">
                                    Pastor Phil contributes spiritual leadership, mentorship guidance, and support for men seeking purpose and direction.
                                </p>
                            </div>

                            <div className="leader-card glass-card" style={{ gridColumn: '1 / -1' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <img src="/pastor-gil.jpg" alt="Gilbert Twumasi Appiah" style={{ width: '100%', maxWidth: '250px', borderRadius: '12px', border: '2px solid var(--color-gold-muted)', marginBottom: '1rem' }} />
                                    <div className="leader-header text-center w-100 justify-content-center">
                                        <h3>Gilbert Twumasi Appiah</h3>
                                        <span className="badge mx-auto d-table mt-2">Mentor</span>
                                    </div>
                                </div>
                                <p className="description mt-3">
                                    Gilbert Twumasi Appiah is a devoted follower of Christ and an ordained minister of the Gospel with a strong passion for supporting and uplifting men in their journey through life. As a mentor within the Backup Men’s Network, he is committed to helping men rediscover strength, purpose, and direction, especially during seasons of challenge and transition.
                                </p>
                                <p className="description mt-3">
                                    With a heart for encouragement and restoration, Gilbert draws from personal experience, biblical wisdom, and years of ministry to inspire men to rise above adversity and build lives of faith, resilience, and integrity.
                                </p>
                                <p className="description mt-3">
                                    Alongside his ministry work, Gilbert brings a diverse professional background that includes counselling, behavioural support, healthcare training, and engineering. This combination of spiritual insight and practical experience allows him to offer balanced guidance to men seeking growth, healing, and renewed confidence.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section section-padding text-center">
                <div className="container">
                    <h2 className="text-accent mb-3">Your Next Level Begins With The Right Network</h2>
                    <p className="lead mb-4">Join the Backup brotherhood today.</p>
                    <Link to="/join" className="btn btn-primary btn-lg">Join the Brotherhood <ArrowRight size={18} /></Link>
                </div>
            </section>
        </div>
    );
};

export default About;
