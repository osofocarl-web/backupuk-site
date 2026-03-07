import { Link } from 'react-router-dom';
import { ShieldAlert, Users, Target, Activity } from 'lucide-react';
import './System.css';

const System = () => {
    return (
        <div className="system-page">
            {/* Header */}
            <section className="page-header text-center">
                <div className="container animate-fade-in">
                    <ShieldAlert size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">THE BACKUP SYSTEM</h1>
                    <p className="lead max-w-800 mx-auto">
                        The Backup System is the support framework that ensures no man struggles alone.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="section-padding container text-center">
                <div className="glass-card max-w-800 mx-auto animate-fade-in delay-100">
                    <h2 className="mb-4">WHAT IS THE BACKUP SYSTEM?</h2>
                    <p className="description">
                        When a man faces a difficult season, the Backup system activates support through mentorship, brotherhood, and personal development pathways.
                    </p>
                </div>
            </section>

            {/* Activation Steps */}
            <section className="activation-section section-padding">
                <div className="container">
                    <h2 className="text-center text-accent mb-5">HOW BACKUP ACTIVATES</h2>
                    <p className="lead text-center max-w-600 mx-auto mb-5">When a man needs support:</p>

                    <div className="steps-container">
                        <div className="activation-step glass-card">
                            <div className="step-count">01</div>
                            <Activity className="text-accent mb-3" size={32} />
                            <h3>He requests Backup.</h3>
                        </div>

                        <div className="activation-step glass-card">
                            <div className="step-count">02</div>
                            <Target className="text-accent mb-3" size={32} />
                            <h3>An Anchor mentor connects with him.</h3>
                        </div>

                        <div className="activation-step glass-card">
                            <div className="step-count">03</div>
                            <Users className="text-accent mb-3" size={32} />
                            <h3>A Brotherhood Circle provides community support.</h3>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <div className="highlight-box max-w-600 mx-auto p-4 inline-block">
                            <p className="lead text-accent m-0">
                                <strong>Together they build a plan for restoration and growth.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section specially for requesting backup */}
            <section className="req-backup-section section-padding text-center">
                <div className="container">
                    <h2 className="mb-4">REQUEST BACKUP</h2>
                    <p className="lead max-w-600 mx-auto mb-4">
                        If you are going through a difficult time, you do not have to face it alone.
                        Request support and someone from the network will connect with you.
                    </p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-3">Request Support Now</Link>
                </div>
            </section>
        </div>
    );
};

export default System;
