import { useState } from 'react';
import { Building, Send, CheckCircle2, AlertTriangle } from 'lucide-react';
import './About.css';

const StartChapter = () => {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            // Simulated Edge API Gateway interaction
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitted(true);
        } catch (err) {
            setError("The global network server is currently experiencing high load. Please try again safely.");
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="page-wrapper flex items-center justify-center p-4 min-h-[80vh]">
                <div className="glass-card text-center p-5 max-w-600 w-full animate-fade-in">
                    <CheckCircle2 size={64} className="mx-auto mb-4 text-green-400" />
                    <h2 className="text-accent mb-3">Pioneer Application Received!</h2>
                    <p className="description mb-4">
                        Thank you for stepping up to lead your city. The Global Expansion Team will review your application and be in touch soon.
                    </p>
                    <a href="/chapters" className="btn btn-primary">Return to Global Map</a>
                </div>
            </div>
        );
    }

    return (
        <div className="page-wrapper">
            <section className="page-header text-center">
                <div className="container animate-fade-in">
                    <Building size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">START A CHAPTER</h1>
                    <p className="lead max-w-800 mx-auto">
                        Be the pioneer in your city. Apply to officially launch a Backup Men's Network chapter and host local brotherhood gatherings.
                    </p>
                </div>
            </section>

            <section className="section-padding container max-w-800">
                <form className="glass-card p-5 animate-fade-in delay-100" onSubmit={handleSubmit}>

                    {error && (
                        <div className="flex items-start gap-4 p-4 mb-5 rounded bg-red-500/10 border-l-4 border-red-500">
                            <AlertTriangle className="text-red-500 flex-shrink-0" />
                            <p className="m-0 text-red-500">{error}</p>
                        </div>
                    )}

                    <h3 className="text-accent mb-4 border-b border-accent/20 pb-2">I. Pioneer Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-accent font-bold mb-2">Full Name *</label>
                            <input type="text" required className="w-full p-3 rounded border border-white/10 bg-black/50 text-white" />
                        </div>
                        <div>
                            <label className="block text-accent font-bold mb-2">Email Address *</label>
                            <input type="email" required className="w-full p-3 rounded border border-white/10 bg-black/50 text-white" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-accent font-bold mb-2">City to Host In *</label>
                            <input type="text" required placeholder="e.g. Toronto" className="w-full p-3 rounded border border-white/10 bg-black/50 text-white" />
                        </div>
                        <div>
                            <label className="block text-accent font-bold mb-2">Country *</label>
                            <input type="text" required placeholder="e.g. Canada" className="w-full p-3 rounded border border-white/10 bg-black/50 text-white" />
                        </div>
                    </div>

                    <h3 className="text-accent mb-4 border-b border-accent/20 pb-2">II. Chapter Vision</h3>

                    <div className="mb-4">
                        <label className="block text-accent font-bold mb-2">Expected Number of Men at Launch *</label>
                        <select required className="w-full p-3 rounded border border-white/10 bg-black/50 text-white">
                            <option value="">Select an estimate...</option>
                            <option value="5-20">5 - 20 Men</option>
                            <option value="20-50">20 - 50 Men</option>
                            <option value="50-100">50 - 100 Men</option>
                            <option value="100+">100+ Men</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-accent font-bold mb-2">Leadership Experience *</label>
                        <input type="text" placeholder="e.g. Pastor, Business Leader, Community Organizer" required className="w-full p-3 rounded border border-white/10 bg-black/50 text-white" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-accent font-bold mb-2">Why do you want to start a Backup chapter in this city? *</label>
                        <textarea rows="4" placeholder="Share your vision for local men." required className="w-full p-3 rounded border border-white/10 bg-black/50 text-white resize-y"></textarea>
                    </div>

                    <div className="p-4 rounded border border-accent/20 bg-accent/5 mb-6">
                        <label className="flex items-start gap-3 cursor-pointer m-0">
                            <input type="checkbox" required className="mt-1 w-5 h-5 accent-[var(--color-accent)]" />
                            <span className="text-sm leading-relaxed">
                                I understand that starting a chapter requires alignment with the Backup Men's Network constitution, Anchor Code, and approval from the Global Board.
                            </span>
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg w-full flex justify-center items-center gap-2" disabled={submitting}>
                        {submitting ? 'Transmitting Pipeline...' : <><Send size={20} /> Submit Chapter Application</>}
                    </button>
                    <p className="text-center text-gray-500 text-sm mt-4">
                        Protected by bank-level encryption. A Regional Director will contact you soon.
                    </p>
                </form>
            </section>
        </div>
    );
};

export default StartChapter;
