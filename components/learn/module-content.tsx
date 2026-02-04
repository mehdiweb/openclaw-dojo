'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Module } from '@/lib/modules';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useProgress } from '@/lib/progress';

interface ModuleContentProps {
    module: Module;
    content: React.ReactNode;
    previousModule?: Module;
    nextModule?: Module;
}

export function ModuleContent({ module, content, previousModule, nextModule }: ModuleContentProps) {
    const { completedModules, markAsComplete } = useProgress();
    const [isCompleting, setIsCompleting] = useState(false);

    const isCompleted = completedModules.includes(module.id);

    const handleMarkComplete = () => {
        setIsCompleting(true);
        markAsComplete(module.id);
        setTimeout(() => setIsCompleting(false), 500);
    };

    return (
        <div className="max-w-4xl mx-auto px-8 py-12 lg:px-8">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-600 mb-6 pl-16 lg:pl-0">
                <Link href="/learn" className="hover:text-gray-900">
                    Learning Path
                </Link>
                {' '}/{' '}
                <span className="text-gray-900">Module {parseInt(module.id)}</span>
            </div>

            {/* Module Header */}
            <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl">{module.icon}</span>
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            {module.title}
                        </h1>
                        <p className="text-xl text-gray-600">
                            {module.description}
                        </p>
                    </div>
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                        ⏱️ {module.estimatedTime}
                    </span>
                    <span className="flex items-center gap-1">
                        📊 Level {module.level}
                    </span>
                    {isCompleted && (
                        <span className="flex items-center gap-1 text-green-600 font-semibold">
                            <CheckCircle className="w-4 h-4" />
                            Completed
                        </span>
                    )}
                </div>
            </div>

            {/* MDX Content */}
            <div className="prose prose-lg max-w-none">
                <div className="bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
                    {content}
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="mt-12 pt-8 border-t-2 border-black">
                <div className="flex items-center justify-between gap-4">
                    {/* Previous Module */}
                    <div className="flex-1">
                        {previousModule && (
                            <Link
                                href={`/learn/${parseInt(previousModule.id)}`}
                                className="flex items-center gap-2 px-4 py-3 border-2 border-black rounded-lg hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all bg-white"
                            >
                                <ChevronLeft className="w-5 h-5" />
                                <div className="text-left">
                                    <div className="text-xs text-gray-600">Previous</div>
                                    <div className="font-semibold text-sm">{previousModule.title}</div>
                                </div>
                            </Link>
                        )}
                    </div>

                    {/* Mark Complete */}
                    {!isCompleted && (
                        <button
                            onClick={handleMarkComplete}
                            disabled={isCompleting}
                            className="px-6 py-3 border-2 border-black rounded-lg font-semibold bg-white hover:bg-gray-50 transition-colors flex items-center gap-2 disabled:opacity-50"
                        >
                            <CheckCircle className="w-5 h-5" />
                            Mark as Complete
                        </button>
                    )}

                    {/* Next Module */}
                    <div className="flex-1 flex justify-end">
                        {nextModule && (
                            <Link
                                href={`/learn/${parseInt(nextModule.id)}`}
                                className="flex items-center gap-2 px-6 py-3 bg-[#FFD54F] border-2 border-black rounded-lg font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                            >
                                <div className="text-right">
                                    <div className="text-xs">Next</div>
                                    <div className="font-bold text-sm">{nextModule.title}</div>
                                </div>
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Completion Message */}
            {!nextModule && isCompleted && (
                <div className="mt-8 bg-green-50 border-2 border-black rounded-lg p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        🎉 You've completed all free modules!
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Ready to unlock advanced features?
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Link
                            href="/learn/skills"
                            className="px-6 py-3 bg-white border-2 border-black rounded-lg font-bold hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                        >
                            Browse Skills
                        </Link>
                        <Link
                            href="/support"
                            className="px-6 py-3 bg-[#FFD54F] border-2 border-black rounded-lg font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                        >
                            Upgrade to Builder
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
