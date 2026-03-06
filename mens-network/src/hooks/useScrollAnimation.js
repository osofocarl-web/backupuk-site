import { useEffect } from 'react';

/**
 * A custom hook that uses IntersectionObserver to add a visibility class 
 * to elements when they scroll into the viewport.
 */
export const useScrollAnimation = () => {
    useEffect(() => {
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the animation class that actually triggers the keyframes
                    entry.target.classList.add('is-visible');

                    // Optional: Stop observing once the animation has triggered once
                    observer.unobserve(entry.target);
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Trigger when 15% of the element is visible
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Select all elements with the base animation classes
        const animatedElements = document.querySelectorAll(
            '.animate-fade-in, .animate-slide-up, .animate-slide-in-left, .animate-slide-in-right'
        );

        animatedElements.forEach(el => observer.observe(el));

        // Cleanup
        return () => observer.disconnect();
    }, []); // Run on mount
};
