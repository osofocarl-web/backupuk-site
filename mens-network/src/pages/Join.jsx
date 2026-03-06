import { Link } from 'react-router-dom';
import { User, ShieldAlert, BadgeCheck, Users } from 'lucide-react';
import './Join.css';

const Join = () => {
    return (
        <div className="join-page">
            {/* Header */}
            <section className="page-header text-center">
                <div className="container animate-fade-in">
                    <BadgeCheck size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">JOIN THE BROTHERHOOD</h1>
                    <p className="lead max-w-800 mx-auto">
                        Backup Men’s Network is a global community of men committed to growth, mentorship, and networking.
                    </p>
                    <p className="lead max-w-800 mx-auto mt-3">
                        By joining, you become part of a brotherhood that provides support, leadership opportunities, and meaningful relationships.
                    </p>
                </div>
            </section>

            {/* Membership Options */}
            <section className="memberships-section section-padding">
                <div className="container">
                    <h2 className="text-center text-accent mb-5">BENEFITS OF JOINING</h2>
                    <div className="max-w-800 mx-auto mb-5 glass-card p-4 animate-fade-in delay-100" style={{ textAlign: 'center' }}>
                        <ul className="grid-list-small" style={{ display: 'inline-block', textAlign: 'left', fontSize: '1.1rem' }}>
                            <li style={{ marginBottom: '10px' }}>Access to mentorship through Anchors</li>
                            <li style={{ marginBottom: '10px' }}>Networking with men globally</li>
                            <li style={{ marginBottom: '10px' }}>Leadership and personal development programs</li>
                            <li style={{ marginBottom: '10px' }}>Invitations to conferences and retreats</li>
                            <li>Brotherhood meetups and social events</li>
                        </ul>
                    </div>

                    <div className="membership-grid">
                        {/* Free Tier */}
                        <div className="membership-card glass-card animate-fade-in delay-100">
                            <User size={32} className="text-accent mb-3" />
                            <h3>FREE MEMBER</h3>
                            <p className="description mb-4">For men looking to explore the network and access basic resources.</p>
                            <ul className="benefits-list mb-4">
                                <li>Access to newsletters</li>
                                <li>Community updates</li>
                                <li>Open events</li>
                            </ul>
                            <a href="#join-form" className="btn btn-outline full-width">Select Free</a>
                        </div>

                        {/* Partner Tier */}
                        <div className="membership-card glass-card featured animate-fade-in delay-200">
                            <div className="popular-badge">Most Popular</div>
                            <Users size={32} className="text-accent mb-3" />
                            <h3>BROTHERHOOD PARTNER</h3>
                            <div className="price mb-3"><span className="currency">£</span>10 - 25<span className="period">/mo</span></div>
                            <p className="description mb-4">Full access to the core support system.</p>
                            <ul className="benefits-list mb-4">
                                <li>Everything in Free</li>
                                <li>Access to mentorship circles</li>
                                <li>Exclusive resources</li>
                            </ul>
                            <a href="#join-form" className="btn btn-primary full-width">Select Partner</a>
                        </div>

                        {/* Leadership Tier */}
                        <div className="membership-card glass-card animate-fade-in delay-300">
                            <ShieldAlert size={32} className="text-accent mb-3" />
                            <h3>LEADERSHIP CIRCLE</h3>
                            <div className="price mb-3"><span className="currency">£</span>40 - 75<span className="period">/mo</span></div>
                            <p className="description mb-4">For men committed to advanced growth and supporting others.</p>
                            <ul className="benefits-list mb-4">
                                <li>Everything in Partner</li>
                                <li>Advanced leadership development</li>
                                <li>Priority mentorship</li>
                            </ul>
                            <a href="#join-form" className="btn btn-outline full-width">Select Leadership</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Form Section */}
            <section id="join-form" className="join-form-section section-padding">
                <div className="container">
                    <div className="form-container glass-card max-w-600 mx-auto">
                        <h2 className="text-center mb-4 text-accent">Registration Form</h2>

                        <form className="custom-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="John Doe" required />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="john@example.com" required />
                            </div>

                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" placeholder="+44 20 7123 4567" required />
                            </div>

                            <div className="form-group">
                                <label>City / Location</label>
                                <input type="text" placeholder="London, UK" required />
                            </div>

                            <div className="form-group">
                                <label>Membership Type</label>
                                <select required defaultValue="">
                                    <option value="" disabled>Select an option</option>
                                    <option value="free">Free Member</option>
                                    <option value="partner">Brotherhood Partner</option>
                                    <option value="leadership">Leadership Circle</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Areas of Interest</label>
                                <textarea rows="3" placeholder="I'm interested in leadership development, finding a mentor, etc."></textarea>
                            </div>

                            <div className="form-group checkbox-group">
                                <input type="checkbox" id="consent" required />
                                <label htmlFor="consent" className="text-muted text-sm">
                                    I consent to Backup Men's Network processing my data to manage my membership and contact me regarding the network.
                                </label>
                            </div>

                            <button type="button" className="btn btn-primary btn-lg full-width mt-4" style={{ width: '100%' }}>Submit Registration</button>
                        </form>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section-padding text-center">
                <div className="container">
                    <h2 className="text-accent mb-3">Your next level begins with the right network.</h2>
                    <p className="lead mb-4">Join the Backup brotherhood today.</p>
                </div>
            </section>
        </div>
    );
};

export default Join;
