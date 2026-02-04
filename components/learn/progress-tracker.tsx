'use client';

import { useEffect, useState } from 'react';
import { getProgressPercentage, getProgress } from '@/lib/progress';
import { getFreeModules } from '@/lib/modules';

export function ProgressTracker() {
    const [percentage, setPercentage] = useState(0);
    const [completed, setCompleted] = useState(0);
    const freeModules = getFreeModules();
    const total = freeModules.length;

    useEffect(() => {
        const updateProgress = () => {
            const progress = getProgress();
            setCompleted(progress.length);
            setPercentage(getProgressPercentage(total));
        };

        updateProgress();

        // Listen for progress updates
        window.addEventListener('progressUpdated', updateProgress);
        return () => window.removeEventListener('progressUpdated', updateProgress);
    }, [total]);

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Your Progress</h3>
                <span className="text-2xl font-bold text-purple-600">{percentage}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div
                    className="h-full bg-purple-600 transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>

            <p className="text-sm text-gray-600">
                {completed} of {total} free modules completed
            </p>
        </div>
    );
}
