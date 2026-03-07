import { useState } from 'react';
import { Flag, Send, CheckCircle2, AlertTriangle } from 'lucide-react';
import './About.css';

const HostEvent = () => {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        // Simulate API network latency & try/catch error boundary
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            // In Phase 7 we route this to /api/host-event
            setSubmitted(true);
        } catch (err) {
            setError("The global network server is currently experiencing high load. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="page-wrapper flex items-center justify-center p-4" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="glass-card text-center p-5 max-w-600 w-full animate-fade-in">
                    <CheckCircle2 size={64} style={{ color: '#4ade80', margin: '0 auto 1.5rem' }} />
                    <h2 className="text-accent mb-3">Proposal Received!</h2>
                    <p className="description mb-4">
                        Thank you for stepping up to lead. The Global Leadership Team will review your application for the new chapter and be in touch shortly.
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
                    <Flag size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">HOST A BACKUP EVENT</h1>
                    <p className="lead max-w-800 mx-auto">
                        Lead the charge. Apply to establish a Backup Men's Network chapter or host an official event in your city.
                    </p>
                </div>
            </section>

            <section className="section-padding container max-w-800">
                <form className="glass-card p-5 animate-fade-in delay-100" onSubmit={handleSubmit}>

                    {error && (
                        <div style={{ backgroundColor: 'rgba(255, 107, 107, 0.1)', borderLeft: '4px solid #ff6b6b', padding: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <AlertTriangle color="#ff6b6b" />
                            <p style={{ margin: 0, color: '#ff6b6b' }}>{error}</p>
                        </div>
                    )}

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

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div>
                            <label className="text-accent" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>City *</label>
                            <input type="text" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }} />
                        </div>
                        <div>
                            <label className="text-accent" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Country *</label>
                            <input type="text" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }} />
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label className="text-accent" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Proposed Event Name / Chapter *</label>
                        <input type="text" placeholder="e.g. Backup London Launch Breakfast" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }} />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label className="text-accent" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Expected Number of Attendees *</label>
                        <select required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'var(--bg-secondary)', color: 'white' }}>
                            <option value="">Select an estimate...</option>
                            <option value="10-50">10 - 50 Men</option>
                            <option value="50-100">50 - 100 Men</option>
                            <option value="100-500">100 - 500 Men</option>
                            <option value="500+">500+ Men</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label className="text-accent" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Vision for the Event *</label>
                        <textarea rows="5" placeholder="Why does your city need a Backup Men's Network chapter?" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', resize: 'vertical' }}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }} disabled={submitting}>
                        {submitting ? 'Transmitting Pipeline...' : <><Send size={20} /> Submit Application</>}
                    </button>
                    <p className="text-center text-muted" style={{ fontSize: '0.8rem', marginTop: '1rem' }}>
                        Protected by bank-level form encryption. A Global Director will contact you within 48 hours.
                    </p>
                </form>
            </section>
        </div>
    );
};

export default HostEvent;
