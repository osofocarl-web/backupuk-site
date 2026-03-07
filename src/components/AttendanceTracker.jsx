import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle, CalendarDays, Loader2, PlayCircle } from 'lucide-react';
import './AttendanceTracker.css';

const AttendanceTracker = () => {
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [recentAttendance, setRecentAttendance] = useState(0);
    const [user, setUser] = useState(null);

    // Provide today's date formatted as YYYY-MM-DD in UTC
    const getTodayDateString = () => {
        const d = new Date();
        const year = d.getUTCFullYear();
        const month = String(d.getUTCMonth() + 1).padStart(2, '0');
        const day = String(d.getUTCDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        const checkStatus = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setIsLoading(false);
                return;
            }
            setUser(user);

            const today = getTodayDateString();

            try {
                // 1. Check if user already checked in today
                const { data: todayCheckin } = await supabase
                    .from('church_attendance')
                    .select('id')
                    .eq('user_id', user.id)
                    .eq('date', today)
                    .single();

                if (todayCheckin) {
                    setIsCheckedIn(true);
                }

                // 2. Get total attendance count
                const { count } = await supabase
                    .from('church_attendance')
                    .select('*', { count: 'exact', head: true })
                    .eq('user_id', user.id);

                setRecentAttendance(count || 0);
            } catch (error) {
                console.error("Error loading attendance:", error);
            } finally {
                setIsLoading(false);
            }
        };

        checkStatus();
    }, []);

    const handleCheckIn = async () => {
        if (!user) {
            window.location.href = '/auth';
            return;
        }

        setIsLoading(true);
        const today = getTodayDateString();

        try {
            const { error } = await supabase
                .from('church_attendance')
                .insert([
                    { user_id: user.id, date: today, service_type: 'Sunday Service' }
                ]);

            if (error) {
                // Supabase code 23505 is unique violation (already checked in)
                if (error.code === '23505') {
                    setIsCheckedIn(true);
                } else {
                    console.error("Error checking in:", error);
                    alert("Unable to check in right now. Please try again.");
                }
            } else {
                setIsCheckedIn(true);
                setRecentAttendance(prev => prev + 1);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    // Determine if today is Sunday
    const isSunday = new Date().getDay() === 0;

    if (isLoading) {
        return (
            <div className="attendance-card glass loading">
                <Loader2 className="spinner" size={32} />
                <p>Loading attendance...</p>
            </div>
        );
    }

    return (
        <div className="attendance-card glass animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="attendance-header">
                <div>
                    <h3 className="flex-center-gap"><CalendarDays className="text-accent" /> Church Attendance</h3>
                    <p className="attendance-subtitle">Track your Sunday service consistency.</p>
                </div>
                <div className="attendance-badge">
                    <strong>{recentAttendance}</strong> Services
                </div>
            </div>

            <div className="attendance-action">
                {isCheckedIn ? (
                    <div className="checked-in-state">
                        <CheckCircle size={32} className="success-color" />
                        <div>
                            <h4>Checked In for Today!</h4>
                            <p>Thank you for joining the service. Have a blessed week.</p>
                        </div>
                    </div>
                ) : (
                    <div className="check-in-state">
                        {!isSunday && (
                            <p className="not-sunday-warning">It looks like today isn't Sunday, but you can still check in if attending a special service.</p>
                        )}
                        <button
                            className="btn-primary check-in-btn"
                            onClick={handleCheckIn}
                            disabled={isLoading}
                        >
                            <PlayCircle size={20} className="mr-2" />
                            {isLoading ? 'Processing...' : 'Click Here to Check In Today'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AttendanceTracker;
