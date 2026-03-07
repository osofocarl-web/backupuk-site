import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Play, Sparkles, Star, ChevronRight, Award, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import './KidsLesson.css';

// Reusable Flip Card Component
const Flashcard = ({ title, content }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`flashcard ${isFlipped ? 'flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    <Sparkles className="card-icon front-icon" />
                    <h3>{title}</h3>
                    <p className="flip-hint">Tap to flip</p>
                </div>
                <div className="flashcard-back">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

const KidsLessonInteractive = ({ lesson }) => {
    const [step, setStep] = useState('intro'); // intro, story, quiz, complete
    const [quizAnswers, setQuizAnswers] = useState({});
    const [isSaving, setIsSaving] = useState(false);

    // Hardcoded logic for demo. In production, these would be in the MD file matter
    const questions = lesson.questions || [
        "What did we learn today?",
        "How can we show God's love?"
    ];

    const handleQuizSelect = (qIndex, option) => {
        setQuizAnswers(prev => ({ ...prev, [qIndex]: option }));
    };

    const triggerConfetti = () => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            }));
            confetti(Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            }));
        }, 250);
    };

    const finishLesson = async () => {
        setIsSaving(true);
        triggerConfetti();

        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                // Save progress
                await supabase
                    .from('kids_progress')
                    .upsert({
                        user_id: user.id,
                        lesson_slug: lesson.slug,
                        stars_earned: 1
                    }, { onConflict: 'user_id, lesson_slug' });
            }
        } catch (error) {
            console.error("Error saving kids progress:", error);
        }

        setStep('complete');
        setIsSaving(false);
    };

    return (
        <div className="kids-interactive-container glass">

            {/* PROGRESS BAR */}
            <div className="kids-progress-bar">
                <div className={`progress-step ${step === 'intro' ? 'active' : 'done'}`}>1. Memory Verse</div>
                <div className={`progress-step ${step === 'story' ? 'active' : (step === 'quiz' || step === 'complete' ? 'done' : '')}`}>2. Story Time</div>
                <div className={`progress-step ${step === 'quiz' ? 'active' : (step === 'complete' ? 'done' : '')}`}>3. Mini Quiz</div>
                <div className={`progress-step ${step === 'complete' ? 'active' : ''}`}>4. Reward!</div>
            </div>

            {/* STEP 1: INTRO / MEMORY VERSE */}
            {step === 'intro' && (
                <div className="interactive-step animate-in">
                    <h2 className="step-title"><Star className="gold-icon" /> Memory Verse Flashcard</h2>
                    <p className="step-desc">Tap the card to reveal the memory verse!</p>

                    <div className="flashcard-stage">
                        <Flashcard title="Today's Memory Verse" content={lesson.memoryVerse} />
                    </div>

                    <div className="step-actions">
                        <button className="btn-kids-primary" onClick={() => setStep('story')}>
                            Next: Read the Story <ChevronRight />
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 2: STORY TIME (Slot for Astro Content) */}
            {step === 'story' && (
                <div className="interactive-step animate-in">
                    <h2 className="step-title"><Play className="gold-icon" /> Story Time</h2>
                    <div className="kids-story-content">
                        {/* We use dangerouslySetInnerHTML here if passing from Astro, or we can just render children */}
                        {lesson.body ? (
                            <div dangerouslySetInnerHTML={{ __html: lesson.body }} />
                        ) : (
                            <p>Read the story from your Bible or lesson plan above!</p>
                        )}
                    </div>

                    <div className="step-actions">
                        <button className="btn-kids-secondary" onClick={() => setStep('intro')}>Back</button>
                        <button className="btn-kids-primary" onClick={() => setStep('quiz')}>
                            Ready for the Quiz! <ChevronRight />
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 3: MINI QUIZ */}
            {step === 'quiz' && (
                <div className="interactive-step quiz-step animate-in">
                    <h2 className="step-title">Brain Challenge!</h2>
                    <p className="step-desc">Answer these questions to earn your star.</p>

                    <div className="kids-quiz-list">
                        {questions.map((q, idx) => (
                            <div key={idx} className="kids-quiz-box glass">
                                <h4>{q}</h4>
                                <div className="kids-quiz-options">
                                    <button
                                        className={`kids-opt ${quizAnswers[idx] === 'Great' ? 'selected' : ''}`}
                                        onClick={() => handleQuizSelect(idx, 'Great')}
                                    >
                                        I know this!
                                    </button>
                                    <button
                                        className={`kids-opt ${quizAnswers[idx] === 'Okay' ? 'selected' : ''}`}
                                        onClick={() => handleQuizSelect(idx, 'Okay')}
                                    >
                                        I need help
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="step-actions">
                        <button className="btn-kids-secondary" onClick={() => setStep('story')}>Back</button>
                        <button
                            className="btn-kids-primary"
                            disabled={Object.keys(quizAnswers).length < questions.length || isSaving}
                            onClick={finishLesson}
                        >
                            {isSaving ? 'Earning Star...' : 'Finish & Get Star!'} <Award />
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 4: COMPLETE / REWARD */}
            {step === 'complete' && (
                <div className="interactive-step complete-step animate-in">
                    <div className="reward-badge">
                        <Star size={80} fill="#f1c40f" color="#f39c12" className="pulse-star" />
                    </div>
                    <h2>Awesome Job!</h2>
                    <p>You earned a new star for your dashboard!</p>

                    <div className="step-actions center">
                        <a href="/children" className="btn-kids-primary">Back to Kids Zone</a>
                        <button className="btn-kids-text" onClick={() => {
                            setStep('intro');
                            setQuizAnswers({});
                        }}>
                            <RotateCcw size={16} /> Play Again
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default KidsLessonInteractive;
