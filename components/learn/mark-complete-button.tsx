'use client';

import { useState, useEffect } from 'react';
import { markComplete, isComplete } from '@/lib/progress';
import { Check } from 'lucide-react';

interface MarkCompleteButtonProps {
    moduleId: string;
}

export function MarkCompleteButton({ moduleId }: MarkCompleteButtonProps) {
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setCompleted(isComplete(moduleId));
    }, [moduleId]);

    const handleMarkComplete = () => {
        markComplete(moduleId);
        setCompleted(true);
    };

    if (completed) {
        return (
            <div className="flex items-center gap-2 px-6 py-3 bg-green-50 border border-green-200 rounded-lg text-green-700">
                <Check className="w-5 h-5" />
                <span className="font-semibold">Module Completed!</span>
            </div>
        );
    }

    return (
        <button
            onClick={handleMarkComplete}
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
        >
            Mark as Complete
        </button>
    );
}
