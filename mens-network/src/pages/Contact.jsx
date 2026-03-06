import { MessageSquare, LifeBuoy, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [activeForm, setActiveForm] = useState('general'); // 'general', 'backup', 'anchor'
    const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus('submitting');
        const formData = new FormData(event.target);

        formData.append("access_key", "1e5b32fa-b16b-4969-8881-aa0231c50e22");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                setStatus('success');
                event.target.reset();
                setTimeout(() => setStatus('idle'), 5000); // Reset status after 5s
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Web3Forms Error:", error);
            setStatus('error');
        }
    };

    const handleTabChange = (formName) => {
        setActiveForm(formName);
        setStatus('idle');
    };

    return (
        <div className="contact-page">
            {/* Header */}
            <section className="page-header text-center">
                <div className="container">
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
                            onClick={() => handleTabChange('general')}
                        >
                            <MessageSquare size={20} /> General Inquiry
                        </button>
                        <button
                            className={`tab-btn backup-tab ${activeForm === 'backup' ? 'active' : ''}`}
                            onClick={() => handleTabChange('backup')}
                        >
                            <LifeBuoy size={20} /> Request Backup
                        </button>
                        <button
                            className={`tab-btn ${activeForm === 'anchor' ? 'active' : ''}`}
                            onClick={() => handleTabChange('anchor')}
                        >
                            <ShieldCheck size={20} /> Anchor Application
                        </button>
                    </div>

                    <div className="form-container glass-card max-w-800 mx-auto">

                        {/* General Contact Form */}
                        {activeForm === 'general' && (
                            <form className="custom-form" onSubmit={onSubmit}>
                                <input type="hidden" name="subject" value="New General Inquiry" />
                                <h2 className="text-center mb-4 text-accent">General Contact</h2>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea name="message" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline btn-lg full-width" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </button>
                                {status === 'success' && <p className="text-center mt-3" style={{ color: '#00cc66', fontWeight: 'bold' }}>✓ Message sent successfully!</p>}
                                {status === 'error' && <p className="text-center mt-3" style={{ color: '#ff4b4b', fontWeight: 'bold' }}>Something went wrong. Please try again.</p>}
                            </form>
                        )}

                        {/* Request Backup Form */}
                        {activeForm === 'backup' && (
                            <form className="custom-form backup-form" onSubmit={onSubmit}>
                                <input type="hidden" name="subject" value="URGENT: Request Backup" />
                                <h2 className="text-center mb-2" style={{ color: '#ff4b4b' }}>Request Backup</h2>
                                <p className="text-center text-muted mb-4 pb-3 border-b">If you are going through a difficult time, you do not have to face it alone.</p>

                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone (optional)</label>
                                    <input type="tel" name="phone" />
                                </div>
                                <div className="form-group">
                                    <label>What support do you need?</label>
                                    <select name="support_category" required defaultValue="">
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
                                    <textarea name="description" rows="4" required></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Urgency Level</label>
                                    <select name="urgency" required defaultValue="">
                                        <option value="" disabled>Select urgency</option>
                                        <option value="low">Low - Exploring options</option>
                                        <option value="medium">Medium - Need guidance soon</option>
                                        <option value="high">High - In crisis</option>
                                    </select>
                                </div>
                                <div className="form-group checkbox-group">
                                    <input type="checkbox" name="consent" id="backup-consent" required value="Yes" />
                                    <label htmlFor="backup-consent" className="text-muted text-sm">
                                        I consent to an Anchor or network representative contacting me regarding my support request.
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-lg full-width mt-4" style={{ backgroundColor: '#ff4b4b', color: '#fff', border: 'none' }} disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                                </button>
                                {status === 'success' && <p className="text-center mt-3" style={{ color: '#00cc66', fontWeight: 'bold' }}>✓ Request received. We will contact you shortly.</p>}
                                {status === 'error' && <p className="text-center mt-3" style={{ color: '#ff4b4b', fontWeight: 'bold' }}>Something went wrong. Please try again.</p>}
                            </form>
                        )}

                        {/* Anchor Application Form */}
                        {activeForm === 'anchor' && (
                            <form className="custom-form" onSubmit={onSubmit}>
                                <input type="hidden" name="subject" value="New Anchor Application" />
                                <h2 className="text-center mb-2 text-accent">Anchor Application</h2>
                                <p className="text-center text-muted mb-4 pb-3 border-b">Apply to become a mentor and help other men rise again.</p>

                                <div className="form-grid-2">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" name="name" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" required />
                                    </div>
                                </div>

                                <div className="form-grid-2">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="tel" name="phone" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Location</label>
                                        <input type="text" name="location" required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Professional or leadership experience</label>
                                    <textarea name="experience" rows="3" required></textarea>
                                </div>

                                <div className="form-group">
                                    <label>Why do you want to become an Anchor?</label>
                                    <textarea name="reason" rows="3" required></textarea>
                                </div>

                                <div className="form-group">
                                    <label>Areas you can mentor in</label>
                                    <input type="text" name="areas" placeholder="e.g. Career, Marriage, Mental Wellness, Faith" required />
                                </div>

                                <div className="form-group">
                                    <label>Availability</label>
                                    <select name="availability" required defaultValue="">
                                        <option value="" disabled>Select availability</option>
                                        <option value="1-2">1-2 hours per week</option>
                                        <option value="3-5">3-5 hours per week</option>
                                        <option value="5+">5+ hours per week</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg full-width mt-4" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                                </button>
                                {status === 'success' && <p className="text-center mt-3" style={{ color: '#00cc66', fontWeight: 'bold' }}>✓ Application submitted successfully!</p>}
                                {status === 'error' && <p className="text-center mt-3" style={{ color: '#ff4b4b', fontWeight: 'bold' }}>Something went wrong. Please try again.</p>}
                            </form>
                        )}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
