import React, { useState, useEffect } from 'react';
import { Quote, Sparkles } from 'lucide-react';
import './DailyQuote.css';

// A robust library of faith-building prophetic quotes. 
// In a full production app, these could be fetched from a database table to allow admins to add more.
const QUOTE_LIBRARY = [
    { text: "God's timing is never early and never late. It is precisely perfect for the miracle you need.", author: "Prophetic Word" },
    { text: "The cross you carry today is building the crown you will wear tomorrow. Do not give up.", author: "Prophetic Word" },
    { text: "When you feel buried, remember you are actually planted. Your season of blooming is near.", author: "Prophetic Word" },
    { text: "Fear is a liar, but faith is a mountain mover. Speak to your mountain today.", author: "Prophetic Word" },
    { text: "Every tear you have cried is recorded in heaven. Your sorrow is about to be turned into divine strategy.", author: "Prophetic Word" },
    { text: "The fire you are walking through is not designed to destroy you; it is designed to refine the gold within you.", author: "Prophetic Word" },
    { text: "Stop looking at the storm and start looking at the One walking on the water.", author: "Prophetic Word" },
    { text: "Your prayers are not bouncing off the ceiling. They are shaking the spiritual realm.", author: "Prophetic Word" },
    { text: "What looks like a setback in the natural is a setup in the supernatural.", author: "Prophetic Word" },
    { text: "God is about to open a door that no man can shut, and shut a door that no man can open.", author: "Prophetic Word" },
    { text: "The giant in front of you is never bigger than the God inside of you.", author: "Prophetic Word" },
    { text: "Your current season of isolation is actually a season of intense preparation. Get ready.", author: "Prophetic Word" },
    { text: "Worship is the weapon that will win this war. Lift your voice before you see the victory.", author: "Prophetic Word" },
    { text: "You did not miss your moment. The God of second chances is writing your next chapter.", author: "Prophetic Word" },
    { text: "The enemy attacks you the hardest when you are on the edge of your greatest breakthrough.", author: "Prophetic Word" },
    { text: "Grace is not just permission to be forgiven; it is power to overcome.", author: "Prophetic Word" }
];

const getDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
};

const DailyQuote = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        // Calculate the day of the year (1-365)
        const dayOfYear = getDayOfYear();

        // Use the day of the year to pick a deterministic quote index
        // This ensures every user sees the same quote on the same day, rotating through the library
        const quoteIndex = dayOfYear % QUOTE_LIBRARY.length;
        setQuote(QUOTE_LIBRARY[quoteIndex]);
    }, []);

    if (!quote) return null;

    return (
        <section className="daily-quote-container animate-fade-in glass">
            <div className="quote-icon-bg">
                <Quote size={120} />
            </div>

            <div className="quote-header">
                <Sparkles size={20} className="gold-sparkle" />
                <span className="quote-label">Daily Prophetic Focus</span>
            </div>

            <blockquote className="quote-body">
                "{quote.text}"
            </blockquote>

            <div className="quote-footer">
                <div className="author-line"></div>
                <span className="quote-author">- {quote.author}</span>
            </div>
        </section>
    );
};

export default DailyQuote;
