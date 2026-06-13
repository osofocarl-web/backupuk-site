import { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Video, Play, X, Download, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import eventsData from '../data/events.json';
import './Events.css';

const Events = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [modalTitle, setModalTitle] = useState('');
    const [associatedFlyer, setAssociatedFlyer] = useState(null);

    const openVideoModal = (videoPath, title, flyerPath) => {
        setSelectedVideo(videoPath);
        setModalTitle(title);
        setAssociatedFlyer(flyerPath);
    };

    const closeVideoModal = () => {
        setSelectedVideo(null);
        setModalTitle('');
        setAssociatedFlyer(null);
    };

    const formatEventDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusColorClass = (status) => {
        if (status.toLowerCase().includes('open') || status.toLowerCase().includes('free')) {
            return 'open';
        }
        if (status.toLowerCase().includes('selling') || status.toLowerCase().includes('fast')) {
            return 'selling';
        }
        return 'upcoming';
    };

    return (
        <div className="page-wrapper events-page">
            <section className="page-header text-center">
                <div className="container animate-fade-in">
                    <Calendar size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">BACKUP AROUND THE WORLD</h1>
                    <p className="lead max-w-800 mx-auto">
                        Brotherhood without borders. Discover active prayer gathers, global leadership summits, and regional retreats.
                    </p>
                </div>
            </section>

            <section className="section-padding container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {eventsData.map((event, index) => (
                        <div key={index} className="event-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                            {/* Card Media Header */}
                            <div className="event-image-container">
                                {event.image ? (
                                    <img 
                                        src={event.image} 
                                        alt={event.title} 
                                        className="event-image" 
                                    />
                                ) : (
                                    <div className="event-image" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Calendar size={48} className="text-gray-600" />
                                    </div>
                                )}
                                <div className="event-media-overlay">
                                    {event.video && (
                                        <button 
                                            className="play-promo-btn"
                                            onClick={() => openVideoModal(event.video, event.title, event.image)}
                                            title="Watch Video Invitation"
                                        >
                                            <Play size={24} fill="#fff" style={{ marginLeft: '4px' }} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Card Details */}
                            <div className="event-card-body">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <span className="event-type-badge">
                                        {event.event_type}
                                    </span>
                                    <span className={`event-status-badge ${getStatusColorClass(event.event_status)}`}>
                                        {event.event_status}
                                    </span>
                                </div>

                                <h3 className="mb-3">{event.title}</h3>
                                <p className="text-sm text-gray-400 mb-4 flex-grow">{event.short_description}</p>
                                
                                <div className="event-meta-item">
                                    <Calendar size={16} className="text-accent" />
                                    <span>{formatEventDate(event.event_date)}</span>
                                </div>
                                <div className="event-meta-item">
                                    <MapPin size={16} className="text-accent" />
                                    <span>{event.venue}, {event.city}</span>
                                </div>
                                {event.host_name && (
                                    <div className="event-meta-item" style={{ marginBottom: '1.5rem' }}>
                                        <User size={16} className="text-accent" />
                                        <span>Hosted by {event.host_name}</span>
                                    </div>
                                )}

                                <div className="flex gap-2 mt-auto" style={{ display: 'flex', gap: '0.75rem' }}>
                                     {event.registration_link.startsWith('http') ? (
                                         <a 
                                             href={event.registration_link} 
                                             target="_blank" 
                                             rel="noopener noreferrer" 
                                             className="btn btn-primary" 
                                             style={{ flexGrow: 1, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                         >
                                             Join Zoom
                                         </a>
                                     ) : (
                                         <Link 
                                             to={event.registration_link} 
                                             className="btn btn-primary" 
                                             style={{ flexGrow: 1, textAlign: 'center' }}
                                         >
                                             Register Interest
                                         </Link>
                                     )}
                                    {event.image && (
                                        <a 
                                            href={event.image} 
                                            download 
                                            className="btn btn-outline" 
                                            style={{ padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                            title="Download Event Flyer"
                                        >
                                            <Download size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-5 text-center p-5 glass-card animate-fade-in delay-300">
                    <h2 className="text-accent mb-3">Want To Host An Event?</h2>
                    <p className="lead mb-4 max-w-600 mx-auto">
                        Don't see your city on the global roster? Pioneer the movement in your local area by taking the lead.
                    </p>
                    <Link to="/host-event" className="btn btn-primary btn-lg inline-flex items-center gap-2">
                        Host a Backup Event <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Premium Video Lightbox Modal */}
            {selectedVideo && (
                <div className="modal-backdrop" onClick={closeVideoModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3 className="text-accent m-0 flex items-center gap-2">
                                <Video size={20} /> Video Invitation
                            </h3>
                            <button className="modal-close-btn" onClick={closeVideoModal}>
                                <X size={24} />
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="video-player-wrapper">
                                <video controls autoPlay name="media">
                                    <source src={selectedVideo} type="video/mp4" />
                                    <source src={selectedVideo} type="video/quicktime" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="glass-card p-3" style={{ border: '1px solid rgba(201, 147, 59, 0.2)', backgroundColor: 'rgba(201, 147, 59, 0.03)' }}>
                                <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-accent)' }}>{modalTitle}</h4>
                                <p style={{ fontSize: '0.85rem', margin: 0, opacity: 0.8, lineHeight: 1.5 }}>
                                    <strong>File Preview Note:</strong> This is a local invitation media asset. If the web player fails to buffer due to encoding or empty streams, you can download the raw invite video file directly using the button below.
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                            {associatedFlyer && (
                                <a 
                                    href={associatedFlyer} 
                                    download 
                                    className="btn btn-outline flex items-center gap-2"
                                    style={{ fontSize: '0.9rem' }}
                                >
                                    <Download size={16} /> Download Flyer
                                </a>
                            )}
                            <a 
                                href={selectedVideo} 
                                download 
                                className="btn btn-primary flex items-center gap-2"
                                style={{ fontSize: '0.9rem' }}
                            >
                                <Download size={16} /> Download Video
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Events;
