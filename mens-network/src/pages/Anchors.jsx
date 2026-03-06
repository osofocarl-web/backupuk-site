import { Link } from 'react-router-dom';
import { Anchor, Compass, ShieldCheck, ArrowUpCircle, Users, Target } from 'lucide-react';
import './Anchors.css';

const Anchors = () => {
    return (
        <div className="anchors-page">
            {/* Header */}
            <section className="page-header text-center">
                <div className="container animate-fade-in">
                    <Anchor size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">THE ANCHORS</h1>
                    <p className="lead max-w-800 mx-auto">
                        Anchors are the mentors and stability leaders within the Backup Men’s Network.
                    </p>
                </div>
            </section>

            {/* What is an Anchor */}
            <section className="section-padding container">
                <div className="glass-card max-w-900 mx-auto animate-fade-in delay-100">
                    <h2 className="text-center mb-4">WHAT IS AN ANCHOR?</h2>
                    <p className="description text-center">
                        They are experienced men who provide guidance, accountability, and encouragement to other men navigating life’s challenges.
                    </p>
                    <p className="description text-center">
                        Anchors offer wisdom gained from their own experiences and help men find stability during difficult seasons.
                    </p>

                    <div className="role-grid mt-5">
                        <div className="role-item">
                            <Compass className="text-accent mb-3" size={32} />
                            <h4>Regain Direction</h4>
                        </div>
                        <div className="role-item">
                            <ShieldCheck className="text-accent mb-3" size={32} />
                            <h4>Restore Confidence</h4>
                        </div>
                        <div className="role-item">
                            <Target className="text-accent mb-3" size={32} />
                            <h4>Rediscover Purpose</h4>
                        </div>
                        <div className="role-item">
                            <Anchor className="text-accent mb-3" size={32} />
                            <h4>Rebuild Stability</h4>
                        </div>
                        <div className="role-item">
                            <ArrowUpCircle className="text-accent mb-3" size={32} />
                            <h4>Rise Again</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Workflow */}
            <section className="workflow-section section-padding">
                <div className="container">
                    <h2 className="text-center text-accent mb-5">HOW ANCHOR SUPPORT WORKS</h2>
                    <div className="timeline-grid">
                        <div className="timeline-step">
                            <div className="step-number">1</div>
                            <h3>Request Support</h3>
                            <p>Request support through the Backup system.</p>
                        </div>
                        <div className="timeline-step">
                            <div className="step-number">2</div>
                            <h3>Match</h3>
                            <p>You are connected with an Anchor mentor.</p>
                        </div>
                        <div className="timeline-step">
                            <div className="step-number">3</div>
                            <h3>Join a Circle</h3>
                            <p>You join a Brotherhood Circle for community support.</p>
                        </div>
                        <div className="timeline-step">
                            <div className="step-number">4</div>
                            <h3>Grow</h3>
                            <p>You walk through a restoration and growth journey.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Training Framework */}
            <section className="training-section section-padding container">
                <h2 className="text-center text-accent mb-3">THE ANCHOR TRAINING FRAMEWORK</h2>
                <p className="lead text-center max-w-800 mx-auto mb-5">
                    Anchors are not just mentors. They are stability leaders who help other men rise again. Anchors go through a 4-stage training pathway.
                </p>

                <div className="training-grid">
                    <div className="training-card glass-card">
                        <h3 className="text-accent">STAGE 1 — FOUNDATION</h3>
                        <p className="purpose"><strong>Purpose:</strong> Establish character and leadership maturity.</p>
                        <ul className="topics-list">
                            <li>Identity and purpose as a man</li>
                            <li>Emotional intelligence</li>
                            <li>Integrity and responsibility</li>
                            <li>Listening and empathy skills</li>
                            <li>Mentoring principles</li>
                        </ul>
                        <div className="outcome box">
                            <strong>Outcome:</strong> Support without judging and guide without controlling.
                        </div>
                    </div>

                    <div className="training-card glass-card">
                        <h3 className="text-accent">STAGE 2 — SUPPORT SKILLS</h3>
                        <p className="purpose"><strong>Purpose:</strong> Equip Anchors with practical tools to help men.</p>
                        <ul className="topics-list">
                            <li>Crisis support and stabilization</li>
                            <li>Mental wellbeing awareness</li>
                            <li>Life transition coaching</li>
                            <li>Accountability frameworks</li>
                            <li>Communication and conflict resolution</li>
                        </ul>
                        <div className="outcome box">
                            <strong>Outcome:</strong> Become effective support partners during difficult seasons.
                        </div>
                    </div>

                    <div className="training-card glass-card">
                        <h3 className="text-accent">STAGE 3 — BROTHERHOOD LEADERSHIP</h3>
                        <p className="purpose"><strong>Purpose:</strong> Train Anchors to lead groups.</p>
                        <ul className="topics-list">
                            <li>Leading Brotherhood Circles</li>
                            <li>Facilitating men’s discussions</li>
                            <li>Building trust in groups</li>
                            <li>Encouraging vulnerability</li>
                            <li>Guiding men toward growth</li>
                        </ul>
                        <div className="outcome box">
                            <strong>Outcome:</strong> Lead small communities of men effectively.
                        </div>
                    </div>

                    <div className="training-card glass-card">
                        <h3 className="text-accent">STAGE 4 — COMMUNITY IMPACT</h3>
                        <p className="purpose"><strong>Purpose:</strong> Expand influence.</p>
                        <ul className="topics-list">
                            <li>Leadership development</li>
                            <li>Community impact initiatives</li>
                            <li>Mentoring the next generation</li>
                            <li>Public speaking and leadership</li>
                        </ul>
                        <div className="outcome box">
                            <strong>Outcome:</strong> Become leaders who multiply strength in other men.
                        </div>
                    </div>
                </div>
            </section>

            {/* Anchor Code */}
            <section className="anchor-code-section section-padding text-center">
                <div className="container">
                    <ShieldCheck size={50} className="text-accent mb-4 mx-auto" />
                    <h2 className="mb-4">ANCHOR CODE</h2>
                    <div className="code-grid max-w-800 mx-auto">
                        <div className="code-item glass-card">Strength with humility</div>
                        <div className="code-item glass-card">Leadership with integrity</div>
                        <div className="code-item glass-card">Support without judgment</div>
                        <div className="code-item glass-card">Brotherhood without competition</div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section section-padding text-center">
                <div className="container">
                    <h2 className="mb-3">Ready to Lead?</h2>
                    <p className="lead mb-4 max-w-600 mx-auto">Apply to join the Anchor Mentorship Program and start multiplying strength in other men.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Apply to be an Anchor</Link>
                </div>
            </section>
        </div>
    );
};

export default Anchors;
