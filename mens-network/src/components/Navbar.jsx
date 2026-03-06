import { Link, useLocation } from 'react-router-dom';
import { Anchor, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Anchors', path: '/anchors' },
        { name: 'System', path: '/system' },
        { name: 'Pathways', path: '/pathways' },
        { name: 'Programs', path: '/programs' },
        { name: 'Resources', path: '/resources' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <Anchor className="logo-icon" size={28} />
                    <div className="logo-text">
                        <span>BACKUP</span>
                        <span className="logo-sub">MEN'S NETWORK</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="navbar-actions">
                    <Link to="/join" className="btn btn-primary nav-btn">Join</Link>
                    <div className="mobile-toggle" onClick={toggleMenu}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="mobile-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`mobile-nav-item ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/join" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }} onClick={closeMenu}>
                        Join the Brotherhood
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
