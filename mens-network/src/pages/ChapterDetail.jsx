import { useParams, Link } from 'react-router-dom';
import chaptersData from '../data/chapters.json';
import { MapPin, Users, ArrowLeft, ShieldCheck, Mail, Calendar } from 'lucide-react';

const ChapterDetail = () => {
    const { slug } = useParams();
    const chapter = chaptersData.find(c => c.slug === slug);

    if (!chapter) {
        return (
            <div className="page-wrapper flex items-center justify-center p-4 text-center">
                <div className="glass-card p-5 max-w-600">
                    <h2 className="text-accent mb-3">Chapter Not Found</h2>
                    <p className="mb-4">This city chapter has not been officially launched or does not exist.</p>
                    <Link to="/chapters" className="btn btn-primary">Return to Global Map</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="page-wrapper">
            <section className="page-header text-center" style={{ paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="container animate-fade-in">
                    <Link to="/chapters" className="inline-flex items-center gap-2 text-muted hover:text-white mb-4 transition-colors">
                        <ArrowLeft size={16} /> Back to Global Directory
                    </Link>
                    <h1 className="text-accent" style={{ fontSize: '3.5rem', textTransform: 'uppercase' }}>{chapter.city}</h1>
                    <div className="flex justify-center items-center gap-4 text-gray-400 mt-2">
                        <span className="flex items-center gap-1"><MapPin size={18} className="text-accent" /> {chapter.country}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><ShieldCheck size={18} className="text-accent" /> {chapter.status.toUpperCase()}</span>
                    </div>
                </div>
            </section>

            <section className="section-padding container max-w-1000 mx-auto">
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>

                    {/* Left Column: Details */}
                    <div>
                        <h2 className="mb-4 text-accent border-b pb-2" style={{ borderColor: 'rgba(201,147,59,0.2)' }}>The Local Brotherhood</h2>
                        <p className="lead mb-5" style={{ lineHeight: 1.8 }}>{chapter.description}</p>

                        <div className="glass-card p-5 mb-5 flex items-center justify-between">
                            <div>
                                <h4 className="text-gray-400 text-sm tracking-widest uppercase mb-1">Chapter Leader</h4>
                                <h3 className="m-0 text-white flex items-center gap-2"><Users size={20} className="text-accent" /> {chapter.local_host_name}</h3>
                                <p className="text-accent text-sm mt-1">{chapter.local_host_role}</p>
                            </div>
                            <a href={`mailto:${chapter.contact_email}`} className="btn btn-outline flex items-center gap-2 border-accent text-accent">
                                <Mail size={16} /> Contact Host
                            </a>
                        </div>

                        <h3 className="mb-4 text-accent">Upcoming Gatherings</h3>
                        <div className="glass-card p-4 border-l-4 border-accent">
                            <h4 className="mb-2">Next Chapter Meetup</h4>
                            <p className="text-gray-400 flex items-center gap-2"><Calendar size={16} /> {new Date(chapter.next_event_date).toLocaleDateString()}</p>
                            <Link to="/contact" className="text-accent mt-3 inline-block hover:underline text-sm">RSVP to Meetup →</Link>
                        </div>
                    </div>

                    {/* Right Column: CTA Panel */}
                    <div className="flex flex-col gap-4">
                        <div className="glass-card p-5 text-center bg-[#0a0a0a]">
                            <h3 className="text-accent mb-2">Join {chapter.city}</h3>
                            <p className="text-sm text-gray-400 mb-4">Register to join the local brotherhood and receive invites to private circles.</p>
                            <Link to={`/join?chapter=${chapter.slug}`} className="btn btn-primary w-full shadow-lg">Join Local Network</Link>
                        </div>

                        <div className="glass-card p-5 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <ShieldCheck size={32} className="mx-auto mb-3 text-gray-500" />
                            <h4 className="mb-2">Become an Anchor</h4>
                            <p className="text-sm text-gray-400 mb-4">This chapter currently has {chapter.number_of_anchors} anchors supporting men. We need more leaders.</p>
                            <Link to="/become-anchor" className="btn btn-outline w-full text-sm">Apply to be an Anchor</Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ChapterDetail;
