import React from 'react';
import { AlertTriangle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

class GlobalErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service here
        console.error("Backup Men's Network Caught Error:", error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--bg-primary, #0f0f13)',
                    color: 'var(--color-text, #f8f9fa)',
                    padding: '2rem',
                    textAlign: 'center'
                }}>
                    <div style={{
                        backgroundColor: 'var(--bg-secondary, #1a1a24)',
                        padding: '3rem',
                        borderRadius: '12px',
                        borderTop: '4px solid var(--color-accent, #c9933b)',
                        maxWidth: '600px',
                        width: '100%',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                    }}>
                        <AlertTriangle size={64} style={{ color: 'var(--color-accent, #c9933b)', marginBottom: '1.5rem' }} />
                        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-accent, #c9933b)' }}>
                            System Recovering
                        </h1>
                        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.8, lineHeight: 1.6 }}>
                            A temporary disruption occurred while loading this module. Our system has safely caught the error to protect the rest of the application.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <button
                                onClick={() => window.location.reload()}
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    backgroundColor: 'transparent',
                                    border: '1px solid var(--color-accent, #c9933b)',
                                    color: 'var(--color-accent, #c9933b)',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    transition: 'all 0.2s'
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(201, 147, 59, 0.1)' }}
                                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
                            >
                                Try Again
                            </button>

                            <a
                                href="/"
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    backgroundColor: 'var(--color-accent, #c9933b)',
                                    border: 'none',
                                    color: '#000',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <Home size={18} /> Return Home
                            </a>
                        </div>

                        {/* Hidden error details for developers in dev mode only */}
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#000', borderRadius: '4px', textAlign: 'left', overflowX: 'auto' }}>
                                <p style={{ color: '#ff6b6b', fontFamily: 'monospace', fontSize: '0.9rem', margin: 0 }}>
                                    {this.state.error.toString()}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default GlobalErrorBoundary;
