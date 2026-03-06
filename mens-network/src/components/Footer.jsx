import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Anchor } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">

                {/* Branding & Mission */}
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <Anchor className="text-accent" />
                        <span>BACKUP MEN'S NETWORK</span>
                    </Link>
                    <p className="footer-tagline">
                        Helping Men Rise Again<br />
                        <span className="text-accent">Through Brotherhood, Mentorship, and Global Networking</span>
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h4>Explore</h4>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/system">The Backup System</Link></li>
                        <li><Link to="/anchors">The Anchors</Link></li>
                        <li><Link to="/pathways">Pathways</Link></li>
                        <li><Link to="/pillars">The 7 Pillars</Link></li>
                        <li><Link to="/chapters">Global Chapters</Link></li>
                        <li><Link to="/programs">Programs & Events</Link></li>
                    </ul>
                </div>

                {/* Action Links */}
                <div className="footer-links">
                    <h4>Get Involved</h4>
                    <ul>
                        <li><Link to="/join">Join the Brotherhood</Link></li>
                        <li><Link to="/contact">Become an Anchor</Link></li>
                        <li><Link to="/contact">Request Backup</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                    </ul>
                </div>

                {/* Social & Contact */}
                <div className="footer-social">
                    <h4>Connect</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Youtube"><Youtube size={20} /></a>
                    </div>
                    <p className="mt-3 text-sm text-muted">
                        helpline@backupuk.org<br />
                        +44 7836 681413
                    </p>
                </div>

            </div>

            <div className="footer-bottom text-center mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="description mb-3 pb-3" style={{ fontSize: '0.9rem', maxWidth: '800px', margin: '0 auto' }}>
                    Backup Men's Network operates in affiliation with <strong>Hopealive Outreach Ministries</strong>, a registered charity in the UK (Charity Number: 1211973).
                </p>
                <p className="text-muted text-sm m-0">
                    &copy; {new Date().getFullYear()} Backup Men's Network. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
