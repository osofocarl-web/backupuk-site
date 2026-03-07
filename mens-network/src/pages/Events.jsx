import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const activeEvents = [
    {
        title: "Backup London Summit 2026",
        date: "September 12, 2026",
        location: "Excel Center, London",
        type: "Conference",
        status: "Registration Open"
    },
    {
        title: "Accra Brotherhood Retreat",
        date: "October 05, 2026",
        location: "Aqua Safari, Ghana",
        type: "Retreat",
        status: "Selling Fast"
    },
    {
        title: "New York Leadership Breakfast",
        date: "November 20, 2026",
        location: "Manhattan, NY",
        type: "Networking",
        status: "Upcoming"
    }
];

const Events = () => {
    return (
        <div className="page-wrapper">
            <section className="page-header text-center">
                <div className="container animate-fade-in">
                    <Calendar size={64} className="text-accent mb-4 mx-auto" />
                    <h1 className="text-accent">BACKUP AROUND THE WORLD</h1>
                    <p className="lead max-w-800 mx-auto">
                        Join thousands of men gathering globally for empowerment, brotherly connection, and restoration.
                    </p>
                </div>
            </section>

            <section className="section-padding container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>

                    {activeEvents.map((event, index) => (
                        <div key={index} className="glass-card animate-fade-in p-5" style={{ animationDelay: `${index * 100}ms` }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <span style={{ backgroundColor: 'rgba(201,147,59,0.2)', color: 'var(--color-accent)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                    {event.type}
                                </span>
                                <span style={{ fontSize: '0.9rem', color: event.status.includes('Open') ? '#4ade80' : 'var(--color-text)' }}>
                                    {event.status}
                                </span>
                            </div>
                            <h3 className="mb-3">{event.title}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', opacity: 0.8 }}>
                                <Calendar size={16} className="text-accent" />
                                <span>{event.date}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', opacity: 0.8 }}>
                                <MapPin size={16} className="text-accent" />
                                <span>{event.location}</span>
                            </div>
                            <Link to="/contact" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                                Register Interest
                            </Link>
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
        </div>
    );
};

export default Events;
