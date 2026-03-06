import { Link } from 'react-router-dom';
import { Target, Shield, HeartPulse, Users, Briefcase, Award, Globe, ShieldCheck } from 'lucide-react';
import './Pillars.css';

const Pillars = () => {
    return (
        <div className="pillars-page">
            {/* Header */}
            <section className="page-header text-center">
                <div className="container animate-fade-in">
                    <ShieldCheck size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">THE 7 PILLARS OF STRONG MEN</h1>
                    <p className="lead max-w-800 mx-auto">
                        Backup Men’s Network is built on seven core pillars that shape strong men, strong families, and strong communities.
                    </p>
                    <p className="description text-muted max-w-800 mx-auto mt-3">
                        These principles guide every program, mentorship session, and leadership initiative within the brotherhood. They represent the core principles that help men develop strength in character, leadership, relationships, and purpose.
                    </p>
                </div>
            </section>

            {/* The 7 Pillars */}
            <section className="pillars-section section-padding container">
                <div className="pillars-grid">

                    {/* Pillar 1 */}
                    <div className="pillar-detail glass-card animate-fade-in delay-100">
                        <div className="pillar-number">01</div>
                        <div className="pillar-content">
                            <div className="flex-header">
                                <Target size={32} className="text-accent" />
                                <h2 className="text-accent">PURPOSE</h2>
                            </div>
                            <p className="lead mt-3 mb-3">Every strong man lives with purpose.</p>
                            <p className="description">
                                Purpose gives direction, motivation, and meaning to life. Men are encouraged to discover their mission, pursue meaningful goals, and live intentionally.
                            </p>
                            <div className="creed-box mt-4">
                                <p>A man without purpose drifts.<br /><strong>A man with purpose leads.</strong></p>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 2 */}
                    <div className="pillar-detail glass-card animate-fade-in delay-200">
                        <div className="pillar-number">02</div>
                        <div className="pillar-content">
                            <div className="flex-header">
                                <Shield size={32} className="text-accent" />
                                <h2 className="text-accent">CHARACTER</h2>
                            </div>
                            <p className="lead mt-3 mb-3">Character is the foundation of leadership.</p>
                            <p className="description">
                                Integrity, honesty, and accountability define a strong man. True strength is demonstrated not through power, but through consistency of values and moral courage.
                            </p>
                            <div className="creed-box mt-4">
                                <p><strong>Character builds trust.</strong></p>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 3 */}
                    <div className="pillar-detail glass-card animate-fade-in delay-300">
                        <div className="pillar-number">03</div>
                        <div className="pillar-content">
                            <div className="flex-header">
                                <HeartPulse size={32} className="text-accent" />
                                <h2 className="text-accent">RESILIENCE</h2>
                            </div>
                            <p className="lead mt-3 mb-3">Every man will face challenges.</p>
                            <p className="description">
                                Resilience is the ability to rise again after setbacks, failure, or loss. Backup Men’s Network teaches men to develop mental, emotional, and spiritual strength to overcome adversity.
                            </p>
                            <div className="creed-box mt-4">
                                <p>Strong men do not avoid storms.<br /><strong>They learn how to stand through them.</strong></p>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 4 */}
                    <div className="pillar-detail glass-card animate-fade-in delay-100">
                        <div className="pillar-number">04</div>
                        <div className="pillar-content">
                            <div className="flex-header">
                                <Users size={32} className="text-accent" />
                                <h2 className="text-accent">BROTHERHOOD</h2>
                            </div>
                            <p className="lead mt-3 mb-3">No man was designed to walk alone.</p>
                            <p className="description">
                                Brotherhood creates a support system where men encourage, mentor, and strengthen one another. Strong relationships help men grow, heal, and succeed.
                            </p>
                            <div className="creed-box mt-4">
                                <p><strong>Brotherhood multiplies strength.</strong></p>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 5 */}
                    <div className="pillar-detail glass-card animate-fade-in delay-200">
                        <div className="pillar-number">05</div>
                        <div className="pillar-content">
                            <div className="flex-header">
                                <Briefcase size={32} className="text-accent" />
                                <h2 className="text-accent">RESPONSIBILITY</h2>
                            </div>
                            <p className="lead mt-3 mb-3">A strong man accepts responsibility for his life.</p>
                            <p className="description">
                                This includes responsibility in family, career, community, and personal development. Responsibility is the mark of maturity and leadership.
                            </p>
                            <div className="creed-box mt-4">
                                <p><strong>Responsibility builds respect.</strong></p>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 6 */}
                    <div className="pillar-detail glass-card animate-fade-in delay-300">
                        <div className="pillar-number">06</div>
                        <div className="pillar-content">
                            <div className="flex-header">
                                <Award size={32} className="text-accent" />
                                <h2 className="text-accent">LEADERSHIP</h2>
                            </div>
                            <p className="lead mt-3 mb-3">Leadership begins with self-leadership.</p>
                            <p className="description">
                                Strong men lead by example, influence others positively, and contribute to the growth of their families and communities.
                            </p>
                            <div className="creed-box mt-4">
                                <p><strong>Leadership is service.</strong></p>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 7 */}
                    <div className="pillar-detail glass-card animate-fade-in delay-100">
                        <div className="pillar-number">07</div>
                        <div className="pillar-content">
                            <div className="flex-header">
                                <Globe size={32} className="text-accent" />
                                <h2 className="text-accent">LEGACY</h2>
                            </div>
                            <p className="lead mt-3 mb-3">Every man should live with the future in mind.</p>
                            <p className="description">
                                Legacy is about the impact a man leaves behind through his actions, influence, and values. Strong men invest in future generations.
                            </p>
                            <div className="creed-box mt-4">
                                <p><strong>Legacy gives life significance.</strong></p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="cta-section section-padding text-center">
                <div className="container">
                    <h2 className="text-accent mb-3">Walk In Strength</h2>
                    <p className="lead mb-4 max-w-600 mx-auto">Embrace these 7 pillars and join a global network of men committed to purpose and legacy.</p>
                    <Link to="/join" className="btn btn-primary btn-lg">Join the Brotherhood</Link>
                </div>
            </section>
        </div>
    );
};

export default Pillars;
