'use client';

interface ProgressBarProps {
    completed: number;
    total: number;
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
    const percentage = Math.round((completed / total) * 100);

    return (
        <div className="bg-white border-2 border-black rounded-lg p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-6">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-gray-900">Your Progress:</span>
                <span className="text-sm font-bold text-gray-900">{completed}/{total} modules</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-6 bg-gray-200 border-2 border-black rounded-lg overflow-hidden mb-2">
                <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 border-r-2 border-black transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                />
            </div>

            <div className="flex items-center justify-between text-xs">
                <span className="text-gray-700">
                    <span className="font-bold">{percentage}% Complete</span>
                </span>
                <span className="text-gray-700">
                    Unlock <span className="font-bold">{total - completed} more modules</span> to reach 100%
                </span>
            </div>
        </div>
    );
}
