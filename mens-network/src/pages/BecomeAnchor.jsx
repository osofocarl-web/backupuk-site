import { useState } from 'react';
import { Target, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import './About.css';

const BecomeAnchor = () => {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        // Simulate API network latency
        setTimeout(() => {
            setSubmitted(true);
            setSubmitting(false);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="page-wrapper flex items-center justify-center p-4" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="glass-card text-center p-5 max-w-600 w-full animate-fade-in">
                    <CheckCircle2 size={64} style={{ color: '#4ade80', margin: '0 auto 1.5rem' }} />
                    <h2 className="text-accent mb-3">Assessment Received</h2>
                    <p className="description mb-4">
                        Thank you for stepping up to lead. Your Anchor Assessment is under review by the Global Mentorship Directorate. You will be contacted regarding the next stage of induction.
                    </p>
                    <a href="/" className="btn btn-primary">Return to Homepage</a>
                </div>
            </div>
        );
    }

    return (
        <div className="page-wrapper">
            <section className="page-header text-center">
                <div className="container animate-fade-in">
                    <ShieldCheck size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">BECOME AN ANCHOR</h1>
                    <p className="lead max-w-800 mx-auto">
                        The brotherhood needs leaders. Apply to mentor men through their darkest seasons and guide them back to stability.
                    </p>
                </div>
            </section>

            <section className="section-padding container max-w-800">
                <form className="glass-card p-5 animate-fade-in delay-100" onSubmit={handleSubmit}>

                    <h3 className="text-accent mb-4 border-b pb-2" style={{ borderBottom: '1px solid rgba(201,147,59,0.2)', paddingBottom: '0.5rem' }}>I. Personal Details</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div>
                            <label className="text-accent" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Full Name *</label>
                            <input type="text" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }} />
                        </div>
                        <div>
                            <label className="text-accent" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email Address *</label>
                            <input type="email" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }} />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                        <div>
                            <label className="text-accent" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>City & Country *</label>
                            <input type="text" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }} />
                        </div>
                        <div>
                            <label className="text-accent" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Phone / WhatsApp *</label>
                            <input type="tel" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }} />
                        </div>
                    </div>

                    <h3 className="text-accent mb-4 border-b pb-2" style={{ borderBottom: '1px solid rgba(201,147,59,0.2)', paddingBottom: '0.5rem' }}>II. Mentorship Profiling</h3>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label className="text-accent" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Professional Background / Industry *</label>
                        <input type="text" placeholder="e.g. Finance, Education, Trades, Entrepreneurship" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }} />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label className="text-accent" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Why do you want to become an Anchor? *</label>
                        <textarea rows="4" placeholder="Briefly share your heart for restoring men." required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', resize: 'vertical' }}></textarea>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <label className="text-accent" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Areas of Experience (Check all that apply)</label>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input type="checkbox" style={{ accentColor: 'var(--color-accent)' }} /> Career Rebuilding
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input type="checkbox" style={{ accentColor: 'var(--color-accent)' }} /> Divorce / Family Crisis
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input type="checkbox" style={{ accentColor: 'var(--color-accent)' }} /> Addiction Recovery
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input type="checkbox" style={{ accentColor: 'var(--color-accent)' }} /> General Mentorship
                            </label>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(201,147,59,0.05)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid rgba(201,147,59,0.2)' }}>
                        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', cursor: 'pointer', margin: 0 }}>
                            <input type="checkbox" required style={{ accentColor: 'var(--color-accent)', width: '20px', height: '20px', marginTop: '4px' }} />
                            <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                                I understand that becoming an Anchor requires completing the 4-Stage Leadership Framework and committing to the Anchor Code of "Support without judgment."
                            </span>
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }} disabled={submitting}>
                        {submitting ? 'Transmitting Assessment...' : <><Send size={20} /> Submit Anchor Assessment</>}
                    </button>
                    <p className="text-center text-muted" style={{ fontSize: '0.8rem', marginTop: '1rem' }}>
                        Your application data is securely encrypted.
                    </p>
                </form>
            </section>
        </div>
    );
};

export default BecomeAnchor;
