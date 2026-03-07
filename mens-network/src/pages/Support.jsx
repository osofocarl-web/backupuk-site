import { Heart, Globe, Shield } from 'lucide-react';
import './About.css';

const Support = () => {
    return (
        <div className="page-wrapper">
            <section className="page-header">
                <div className="container">
                    <h1 className="text-accent animate-fade-in">Support the Brotherhood</h1>
                    <p className="lead delay-100">Partner with us to ensure no man has to walk his toughest battles alone.</p>
                </div>
            </section>

            <section className="section-padding container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <div className="glass-card animate-fade-in text-center p-5">
                        <Heart size={48} className="text-accent mx-auto mb-4" />
                        <h3 className="mb-3">Donate to the Cause</h3>
                        <p className="description mb-4">
                            Your financial support allows us to host empowerment retreats, establish new city chapters, and provide free resources for men undergoing crisis.
                        </p>
                        <button className="btn btn-primary" onClick={() => alert("Donation gateway initializing...")}>
                            Donate Now
                        </button>
                    </div>

                    <div className="glass-card animate-fade-in delay-100 text-center p-5">
                        <Globe size={48} className="text-accent mx-auto mb-4" />
                        <h3 className="mb-3">Global Partnerships</h3>
                        <p className="description mb-4">
                            We partner with churches, corporations, and mental health organizations to build stronger support systems for men globally.
                        </p>
                        <a href="/contact" className="btn btn-outline">
                            Partner With Us
                        </a>
                    </div>

                    <div className="glass-card animate-fade-in delay-200 text-center p-5">
                        <Shield size={48} className="text-accent mx-auto mb-4" />
                        <h3 className="mb-3">Become an Anchor</h3>
                        <p className="description mb-4">
                            The greatest gift you can give is your time and wisdom. Apply to be an Anchor and walk alongside a brother who needs guidance.
                        </p>
                        <a href="/anchors" className="btn btn-outline">
                            Apply to Mentor
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Support;
