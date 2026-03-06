import { Map, Zap, HeartPulse, Hammer, Award } from 'lucide-react';
import './Pathways.css';

const Pathways = () => {
    return (
        <div className="pathways-page">
            {/* Header */}
            <section className="page-header text-center">
                <div className="container animate-fade-in">
                    <Map size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">THE FOUR PATHWAYS</h1>
                    <p className="lead max-w-800 mx-auto">
                        Backup Men’s Network operates through four transformation pathways designed to strengthen every area of a man's life.
                    </p>
                </div>
            </section>

            {/* Pathways List */}
            <section className="section-padding container">
                <div className="pathway-cards-container">

                    {/* Revival */}
                    <div className="pathway-detail glass-card animate-fade-in delay-100">
                        <div className="pathway-icon">
                            <Zap size={48} className="text-accent" />
                        </div>
                        <div className="pathway-content">
                            <h2 className="text-accent">REVIVAL</h2>
                            <p className="lead">Revival focuses on reconnecting men with purpose, identity, and spiritual strength.</p>
                            <div className="activities-box mt-4">
                                <h4 className="text-muted mb-2">Activities include:</h4>
                                <ul className="activities-list">
                                    <li>Men’s gatherings</li>
                                    <li>Faith and purpose sessions</li>
                                    <li>Reflection and prayer sessions</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Rejuvenation */}
                    <div className="pathway-detail glass-card animate-fade-in delay-200">
                        <div className="pathway-icon">
                            <HeartPulse size={48} className="text-accent" />
                        </div>
                        <div className="pathway-content">
                            <h2 className="text-accent">REJUVENATION</h2>
                            <p className="lead">Rejuvenation focuses on restoring emotional and mental wellbeing.</p>
                            <div className="activities-box mt-4">
                                <h4 className="text-muted mb-2">Activities include:</h4>
                                <ul className="activities-list">
                                    <li>Wellness workshops</li>
                                    <li>Stress management sessions</li>
                                    <li>Outdoor activities and retreats</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Restoration */}
                    <div className="pathway-detail glass-card animate-fade-in delay-300">
                        <div className="pathway-icon">
                            <Hammer size={48} className="text-accent" />
                        </div>
                        <div className="pathway-content">
                            <h2 className="text-accent">RESTORATION</h2>
                            <p className="lead">Restoration focuses on rebuilding life after difficult seasons.</p>
                            <div className="activities-box mt-4">
                                <h4 className="text-muted mb-2">Activities include:</h4>
                                <ul className="activities-list">
                                    <li>Mentorship programs</li>
                                    <li>Counselling support</li>
                                    <li>Brotherhood circles</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Empowerment */}
                    <div className="pathway-detail glass-card animate-fade-in delay-100">
                        <div className="pathway-icon">
                            <Award size={48} className="text-accent" />
                        </div>
                        <div className="pathway-content">
                            <h2 className="text-accent">EMPOWERMENT</h2>
                            <p className="lead">Empowerment focuses on equipping men to lead and succeed.</p>
                            <div className="activities-box mt-4">
                                <h4 className="text-muted mb-2">Activities include:</h4>
                                <ul className="activities-list">
                                    <li>Leadership development</li>
                                    <li>Career mentoring</li>
                                    <li>Entrepreneurship training</li>
                                    <li>Public speaking workshops</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Pathways;
