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

            {/* Resource Downloads */}
            <section className="resources-downloads section-padding text-center">
                <div className="container">
                    <h2 className="text-accent mb-5">DOWNLOADABLE MATERIALS</h2>
                    <div className="resources-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                        {/* Resource Card 1 */}
                        <div className="resource-card glass-card">
                            <h3 className="text-accent mb-3">The Anchor Framework</h3>
                            <p className="description mb-4">A comprehensive guide on how our mentorship system works, expectations for Anchors, and how to get the most out of your brotherhood circle.</p>
                            <a href="#" className="btn btn-outline" style={{ display: 'inline-block', textAlign: 'center' }}><FileText size={18} className="me-2" /> Download PDF</a>
                        </div>

                        {/* Resource Card 2 */}
                        <div className="resource-card glass-card">
                            <h3 className="text-accent mb-3">Daily Resilience Devotional</h3>
                            <p className="description mb-4">A 30-day reading plan focused on mental strength, emotional healing, and finding purpose after setbacks.</p>
                            <a href="#" className="btn btn-outline" style={{ display: 'inline-block', textAlign: 'center' }}><BookOpen size={18} className="me-2" /> Read Online</a>
                        </div>

                        {/* Resource Card 3 */}
                        <div className="resource-card glass-card">
                            <h3 className="text-accent mb-3">Brotherhood Discussion Guides</h3>
                            <p className="description mb-4">Topic outlines and guiding questions for local meetups covering topics like fatherhood, finances, and faith.</p>
                            <a href="#" className="btn btn-outline" style={{ display: 'inline-block', textAlign: 'center' }}><FolderOpen size={18} className="me-2" /> Access Library</a>
                        </div>

                        {/* Resource Card 4 */}
                        <div className="resource-card glass-card">
                            <h3 className="text-accent mb-3">Uplift Conference Sessions</h3>
                            <p className="description mb-4">Watch recordings from our past annual networking conferences, featuring keynotes from our leadership team.</p>
                            <a href="#" className="btn btn-outline" style={{ display: 'inline-block', textAlign: 'center' }}><Video size={18} className="me-2" /> Watch Videos</a>
                        </div>

                    </div>

                    <p className="lead text-muted mt-5 mb-0">Join the network to gain immediate access to the full resource library and mentor-curated guides.</p>
                </div>
            </section>
        </div>
    );
};

export default Resources;
