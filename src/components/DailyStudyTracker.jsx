import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle, Loader2 } from 'lucide-react';

const DailyStudyTracker = ({ dayId, dayTitle }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkStatus();
    }, [dayId]);

    const checkStatus = async () => {
        setIsLoading(true);
        const { data: { session } } = await supabase.auth.getSession();

        if (session?.user) {
            setUser(session.user);

            const { data } = await supabase
                .from('completed_days')
                .select('id')
                .eq('user_id', session.user.id)
                .eq('day_id', dayId)
                .single();

            if (data) {
                setIsCompleted(true);
            }
        }
        setIsLoading(false);
    };

    const markComplete = async () => {
        if (!user) {
            alert("Please log in to track your reading progress!");
            return;
        }

        setIsSaving(true);

        try {
            // Insert the completed day record
            const { error: insertError } = await supabase
                .from('completed_days')
                .upsert({ user_id: user.id, day_id: dayId }, { onConflict: 'user_id, day_id' });

            if (insertError) throw insertError;

            // Increment the profile streak/counters
            // In a production app with complex streak logic, this would be an RPC call or Edge Function.
            // For now, we will do a simple read and increment.
            const { data: profile } = await supabase
                .from('profiles')
                .select('day_streak, chapters_read')
                .eq('id', user.id)
                .single();

            if (profile) {
                await supabase
                    .from('profiles')
                    .update({
                        day_streak: (profile.day_streak || 0) + 1,
                        chapters_read: (profile.chapters_read || 0) + 3 // Assuming avg 3 chapters a day
                    })
                    .eq('id', user.id);
            }

            setIsCompleted(true);
        } catch (error) {
            console.error("Error saving progress:", error);
            alert("There was an issue saving your progress. Please try again.");
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return <div className="loading-tracker"><Loader2 className="spinner" /> Checking status...</div>;
    }

    if (isCompleted) {
        return (
            <div className="tracker-box success animate-fade-in glass">
                <CheckCircle size={32} className="success-icon" />
                <div className="tracker-text">
                    <h3>Day Completed!</h3>
                    <p>You have finished the reading for {dayTitle}. Great job!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="tracker-box pending animate-fade-in glass">
            <div className="tracker-text">
                <h3>Finish Today's Reading?</h3>
                <p>Click below to mark {dayTitle} as complete and keep your streak alive!</p>
            </div>
            <button
                className="btn-mark-complete"
                onClick={markComplete}
                disabled={isSaving}
            >
                {isSaving ? <Loader2 className="spinner" /> : <><CheckCircle size={20} /> Mark as Complete</>}
            </button>
        </div>
    );
};

export default DailyStudyTracker;
