import { Quote } from 'lucide-react';
import './About.css'; // Inheriting styling from about for consistency

const Testimonials = () => {
    return (
        <div className="page-wrapper">
            <section className="page-header">
                <div className="container">
                    <h1 className="text-accent animate-fade-in">Brotherhood Testimonials</h1>
                    <p className="lead delay-100">Real stories of restoration, support, and strength from the Backup Men's Network.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid-responsive">

                        <div className="glass-card animate-fade-in p-5 relative" style={{ position: 'relative' }}>
                            <Quote size={40} className="text-accent" style={{ position: 'absolute', top: 20, right: 20, opacity: 0.2 }} />
                            <p className="description mb-4" style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                                "I was navigating a devastating financial failure and felt entirely alone. Joining a Backup mentorship circle in London completely changed my trajectory. My Anchor guided me back to my feet without judgment."
                            </p>
                            <h4 className="text-accent">— David M., London Chapter</h4>
                        </div>

                        <div className="glass-card animate-fade-in delay-100 p-5 relative" style={{ position: 'relative' }}>
                            <Quote size={40} className="text-accent" style={{ position: 'absolute', top: 20, right: 20, opacity: 0.2 }} />
                            <p className="description mb-4" style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                                "As men, we are taught to carry our burdens silently. The Backup Men's Network taught me that true strength is found in brotherhood. The global retreat was a turning point in my life."
                            </p>
                            <h4 className="text-accent">— Samuel T., Lagos Chapter</h4>
                        </div>

                        <div className="glass-card animate-fade-in delay-200 p-5 relative" style={{ position: 'relative' }}>
                            <Quote size={40} className="text-accent" style={{ position: 'absolute', top: 20, right: 20, opacity: 0.2 }} />
                            <p className="description mb-4" style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                                "Becoming an Anchor has been just as healing for me as it has been for my mentees. Pastor Carl's vision of 'No man left behind' is truly a global reality here."
                            </p>
                            <h4 className="text-accent">— Michael B., Anchor (Toronto)</h4>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
