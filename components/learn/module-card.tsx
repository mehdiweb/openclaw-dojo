'use client';

import Link from 'next/link';
import { Lock } from 'lucide-react';
import { Module } from '@/lib/modules';
import { isComplete } from '@/lib/progress';
import { useEffect, useState } from 'react';

interface ModuleCardProps {
    module: Module;
    isLocked: boolean;
}

export function ModuleCard({ module, isLocked }: ModuleCardProps) {
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setCompleted(isComplete(module.id));

        // Listen for progress updates
        const handleProgressUpdate = () => {
            setCompleted(isComplete(module.id));
        };

        window.addEventListener('progressUpdated', handleProgressUpdate);
        return () => window.removeEventListener('progressUpdated', handleProgressUpdate);
    }, [module.id]);

    return (
        <Link
            href={isLocked ? '/support' : `/learn/${module.slug}`}
            className="group relative block"
        >
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                {/* Lock overlay for premium modules */}
                {isLocked && (
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
                        <div className="text-center">
                            <Lock className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                            <span className="text-sm font-semibold text-gray-600">
                                {module.tier === 'builder' ? 'Builder Tier' : 'Architect Tier'}
                            </span>
                        </div>
                    </div>
                )}

                {/* Badge: Free/Premium/Completed */}
                <div className="flex items-center gap-2 mb-3">
                    {module.tier === 'free' && !completed && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                            FREE
                        </span>
                    )}
                    {completed && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded">
                            ✓ COMPLETED
                        </span>
                    )}
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                        Level {module.level}
                    </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-2xl flex-shrink-0">
                        {module.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                            {module.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                            {module.description}
                        </p>
                    </div>
                </div>

                {/* Footer: Time estimate */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                        ⏱️ {module.estimatedTime}
                    </span>
                    {module.prerequisites.length > 0 && (
                        <span className="text-gray-400">
                            {module.prerequisites.length} prerequisite{module.prerequisites.length > 1 ? 's' : ''}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
