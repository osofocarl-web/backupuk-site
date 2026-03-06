import { BookOpen, Video, FileText, Headphones, FolderOpen } from 'lucide-react';
import './Resources.css';

const Resources = () => {
    return (
        <div className="resources-page">
            {/* Header */}
            <section className="page-header text-center">
                <div className="container animate-fade-in">
                    <BookOpen size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">BROTHERHOOD RESOURCES</h1>
                    <p className="lead max-w-800 mx-auto">
                        Articles, videos, and guides focused on leadership, mental wellness, fatherhood, faith, identity, and personal growth.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="categories-section section-padding">
                <div className="container">
                    <div className="categories-grid">

                        <div className="category-card glass-card">
                            <FolderOpen size={40} className="text-accent mb-3" />
                            <h3>Leadership</h3>
                            <p className="text-muted mb-4">Tools and frameworks for leading yourself and others effectively.</p>
                            <ul className="resource-list">
                                <li><FileText size={16} /> The 7 Pillars of Strong Men</li>
                                <li><Video size={16} /> Leading with Integrity (Seminar)</li>
                                <li><BookOpen size={16} /> Recommended Reading List</li>
                            </ul>
                        </div>

                        <div className="category-card glass-card">
                            <FolderOpen size={40} className="text-accent mb-3" />
                            <h3>Mental Wellness</h3>
                            <p className="text-muted mb-4">Strategies for managing stress, avoiding burnout, and building emotional resilience.</p>
                            <ul className="resource-list">
                                <li><FileText size={16} /> Rejuvenation Guide</li>
                                <li><Headphones size={16} /> Handling Pressure (Podcast Series)</li>
                                <li><Video size={16} /> The Silent Struggle (Documentary)</li>
                            </ul>
                        </div>

                        <div className="category-card glass-card">
                            <FolderOpen size={40} className="text-accent mb-3" />
                            <h3>Fatherhood & Family</h3>
                            <p className="text-muted mb-4">Resources to help you build strong foundations at home.</p>
                            <ul className="resource-list">
                                <li><FileText size={16} /> The Intentional Father</li>
                                <li><Video size={16} /> Breaking Generational Cycles</li>
                                <li><Headphones size={16} /> Leading the Home</li>
                            </ul>
                        </div>

                        <div className="category-card glass-card">
                            <FolderOpen size={40} className="text-accent mb-3" />
                            <h3>Faith & Identity</h3>
                            <p className="text-muted mb-4">Discovering purpose and grounding your identity in solid principles.</p>
                            <ul className="resource-list">
                                <li><FileText size={16} /> Discovering Your Purpose</li>
                                <li><Video size={16} /> The Brotherhood Creed</li>
                                <li><BookOpen size={16} /> Foundational Doctrines</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Notice */}
            <section className="notice-section section-padding text-center">
                <div className="container p-5 glass-card max-w-800 mx-auto">
                    <h2>More Resources Coming Soon</h2>
                    <p className="lead text-muted mt-3 mb-0">Join the network to gain immediate access to the full resource library and mentor-curated guides.</p>
                </div>
            </section>
        </div>
    );
};

export default Resources;
