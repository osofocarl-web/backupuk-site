import { Calendar, Globe, Clock, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Invite.css';

const Invite = () => {
    return (
        <div className="invite-page">
            <div className="invite-container">
                <div className="invite-header text-center">
                    <h1 className="text-accent mb-2">BACKUP MEN'S NETWORK</h1>
                    <h2 className="invite-subtitle">OFFICIAL GLOBAL LAUNCH</h2>
                </div>

                <div className="founders-section">
                    <div className="founder">
                        <img src="/john-carl-acquah.jpg" alt="John Carl Acquah" className="founder-img" />
                        <h4 className="text-accent mt-3 mb-1">John Carl Acquah</h4>
                        <span className="badge">Convenor</span>
                    </div>
                    <div className="founder">
                        <img src="/pastor-gil.jpg" alt="Pastor Gil" className="founder-img" />
                        <h4 className="text-accent mt-3 mb-1">Pastor Gil</h4>
                        <span className="badge">Mentor</span>
                    </div>
                </div>

                <div className="meeting-details text-center glass-card mt-4 p-4">
                    <h3 className="text-accent mb-4">RISE AGAIN. STRONGER TOGETHER.</h3>
                    <p className="lead mb-4">
                        Join us for the inaugural global gathering of the Backup Men's Network.
                        A space for brotherhood, mentorship, and support. No man should fight his battles alone.
                    </p>

                    <div className="details-grid">
                        <div className="detail-item">
                            <Calendar size={24} className="text-accent mb-2 mx-auto" />
                            <strong>Saturday</strong>
                            <span>18th April 2026</span>
                        </div>
                        <div className="detail-item">
                            <Video size={24} className="text-accent mb-2 mx-auto" />
                            <strong>Location</strong>
                            <span>Live on Zoom</span>
                        </div>
                        <div className="detail-item">
                            <Clock size={24} className="text-accent mb-2 mx-auto" />
                            <strong>UK Time (BST)</strong>
                            <span>6:00 PM</span>
                        </div>
                    </div>
                </div>

                <div className="timezones-section mt-4">
                    <h4 className="text-center text-accent"><Globe size={20} className="inline-icon" /> GLOBAL START TIMES</h4>
                    <div className="timezones-grid mt-3">
                        <div className="tz-item">🇺🇸 <strong>USA:</strong> 10AM (PT) / 1PM (ET)</div>
                        <div className="tz-item">🇬🇧 <strong>UK/Ireland:</strong> 6:00 PM (BST)</div>
                        <div className="tz-item">🇳🇬 <strong>Nigeria:</strong> 6:00 PM (WAT)</div>
                        <div className="tz-item">🇿🇦 <strong>South Africa:</strong> 7:00 PM (SAST)</div>
                        <div className="tz-item">🇦🇪 <strong>Dubai:</strong> 9:00 PM (GST)</div>
                        <div className="tz-item">🇮🇳 <strong>India:</strong> 10:30 PM (IST)</div>
                    </div>
                </div>

                <div className="action-section text-center mt-5">
                    <Link to="/join" className="btn btn-primary btn-lg pulse-btn">
                        Register for Zoom Link <ArrowRight size={18} className="ms-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Invite;
