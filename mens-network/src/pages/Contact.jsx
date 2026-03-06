import { MessageSquare, LifeBuoy, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [activeForm, setActiveForm] = useState('general'); // 'general', 'backup', 'anchor'

    return (
        <div className="contact-page">
            {/* Header */}
            <section className="page-header text-center">
                <div className="container animate-fade-in">
                    <MessageSquare size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">CONNECT WITH THE NETWORK</h1>
                    <p className="lead max-w-800 mx-auto">
                        Whether you have a question, need immediate support, or want to become an Anchor mentor, we are here.
                    </p>
                </div>
            </section>

            {/* Form Selection Tabs */}
            <section className="forms-section section-padding">
                <div className="container">

                    <div className="form-tabs">
                        <button
                            className={`tab-btn ${activeForm === 'general' ? 'active' : ''}`}
                            onClick={() => setActiveForm('general')}
                        >
                            <MessageSquare size={20} /> General Inquiry
                        </button>
                        <button
                            className={`tab-btn backup-tab ${activeForm === 'backup' ? 'active' : ''}`}
                            onClick={() => setActiveForm('backup')}
                        >
                            <LifeBuoy size={20} /> Request Backup
                        </button>
                        <button
                            className={`tab-btn ${activeForm === 'anchor' ? 'active' : ''}`}
                            onClick={() => setActiveForm('anchor')}
                        >
                            <ShieldCheck size={20} /> Anchor Application
                        </button>
                    </div>

                    <div className="form-container glass-card max-w-800 mx-auto animate-fade-in">

                        {/* General Contact Form */}
                        {activeForm === 'general' && (
                            <form className="custom-form">
                                <h2 className="text-center mb-4 text-accent">General Contact</h2>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" required />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea rows="5" required></textarea>
                                </div>
                                <button type="button" className="btn btn-outline btn-lg full-width">Send Message</button>
                            </form>
                        )}

                        {/* Request Backup Form */}
                        {activeForm === 'backup' && (
                            <form className="custom-form backup-form">
                                <h2 className="text-center mb-2" style={{ color: '#ff4b4b' }}>Request Backup</h2>
                                <p className="text-center text-muted mb-4 pb-3 border-b">If you are going through a difficult time, you do not have to face it alone.</p>

                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone (optional)</label>
                                    <input type="tel" />
                                </div>
                                <div className="form-group">
                                    <label>What support do you need?</label>
                                    <select required defaultValue="">
                                        <option value="" disabled>Select category</option>
                                        <option value="emotional">Emotional / Stress</option>
                                        <option value="financial">Financial / Career Loss</option>
                                        <option value="relationship">Marriage / Relationships</option>
                                        <option value="faith">Faith / Purpose</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Brief description of situation</label>
                                    <textarea rows="4" required></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Urgency Level</label>
                                    <select required defaultValue="">
                                        <option value="" disabled>Select urgency</option>
                                        <option value="low">Low - Exploring options</option>
                                        <option value="medium">Medium - Need guidance soon</option>
                                        <option value="high">High - In crisis</option>
                                    </select>
                                </div>
                                <div className="form-group checkbox-group">
                                    <input type="checkbox" id="backup-consent" required />
                                    <label htmlFor="backup-consent" className="text-muted text-sm">
                                        I consent to an Anchor or network representative contacting me regarding my support request.
                                    </label>
                                </div>
                                <button type="button" className="btn btn-lg full-width mt-4" style={{ backgroundColor: '#ff4b4b', color: '#fff', border: 'none' }}>
                                    Submit Request
                                </button>
                            </form>
                        )}

                        {/* Anchor Application Form */}
                        {activeForm === 'anchor' && (
                            <form className="custom-form">
                                <h2 className="text-center mb-2 text-accent">Anchor Application</h2>
                                <p className="text-center text-muted mb-4 pb-3 border-b">Apply to become a mentor and help other men rise again.</p>

                                <div className="form-grid-2">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" required />
                                    </div>
                                </div>

                                <div className="form-grid-2">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="tel" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Location</label>
                                        <input type="text" required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Professional or leadership experience</label>
                                    <textarea rows="3" required></textarea>
                                </div>

                                <div className="form-group">
                                    <label>Why do you want to become an Anchor?</label>
                                    <textarea rows="3" required></textarea>
                                </div>

                                <div className="form-group">
                                    <label>Areas you can mentor in</label>
                                    <input type="text" placeholder="e.g. Career, Marriage, Mental Wellness, Faith" required />
                                </div>

                                <div className="form-group">
                                    <label>Availability</label>
                                    <select required defaultValue="">
                                        <option value="" disabled>Select availability</option>
                                        <option value="1-2">1-2 hours per week</option>
                                        <option value="3-5">3-5 hours per week</option>
                                        <option value="5+">5+ hours per week</option>
                                    </select>
                                </div>

                                <button type="button" className="btn btn-primary btn-lg full-width mt-4">Submit Application</button>
                            </form>
                        )}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
