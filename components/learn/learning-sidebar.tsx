'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Module } from '@/lib/modules';
import { CheckCircle, Circle, Lock, Menu, X } from 'lucide-react';
import { useProgress } from '@/lib/progress';

interface LearningSidebarProps {
    freeModules: Module[];
    builderModules: Module[];
    architectModules: Module[];
}

export function LearningSidebar({ freeModules, builderModules, architectModules }: LearningSidebarProps) {
    const pathname = usePathname();
    const { completedModules } = useProgress();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Extract current module ID from pathname (/learn/1 -> "01")
    const currentModuleId = pathname.match(/\/learn\/(\d+)/)?.[1]?.padStart(2, '0');

    const totalModules = freeModules.length;
    const completedCount = completedModules.filter(id =>
        freeModules.some(m => m.id === id)
    ).length;
    const progress = (completedCount / totalModules) * 100;

    const SidebarContent = () => (
        <>
            {/* Header */}
            <div className="p-6 border-b-2 border-black">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="font-bold text-xl text-gray-900">📖 Learning Path</h2>
                    {/* Mobile close button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="lg:hidden p-1 hover:bg-gray-100 rounded transition-colors"
                        aria-label="Close menu"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                    {completedCount} of {totalModules} completed
                </div>
                {/* Progress bar */}
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#FFD54F] transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Free Modules */}
            <div className="p-4">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Free Tier
                </div>
                <div className="space-y-1">
                    {freeModules.map((module) => {
                        const isCompleted = completedModules.includes(module.id);
                        const isCurrent = currentModuleId === module.id;

                        return (
                            <Link
                                key={module.id}
                                href={`/learn/${parseInt(module.id)}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-3 py-2 rounded-lg transition-colors ${isCurrent
                                    ? 'bg-[#FFD54F] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                                    : 'hover:bg-gray-100'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    {isCompleted ? (
                                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                    ) : isCurrent ? (
                                        <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-black rounded-full" />
                                        </div>
                                    ) : (
                                        <Circle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                    )}
                                    <span className="text-xs text-gray-500">{module.icon}</span>
                                    <span className={`text-sm flex-1 ${isCurrent ? 'font-bold text-gray-900' : 'text-gray-700'
                                        }`}>
                                        {module.title}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Lobster Library */}
            <div className="p-4 border-t border-gray-200">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    🦞 Lobster Library
                </div>
                <Link
                    href="/learn/skills"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-700 flex-1">Pre-Built Skills</span>
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-semibold">
                            Builder
                        </span>
                    </div>
                </Link>
                <p className="text-xs text-gray-500 mt-2 px-3">
                    10 automation skills with setup wizards
                </p>
            </div>

            {/* Builder Tier */}
            <div className="p-4 border-t border-gray-200">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Builder Tier 🟡
                </div>
                <div className="space-y-1">
                    {builderModules.map((module) => (
                        <button
                            key={module.id}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors opacity-60"
                        >
                            <div className="flex items-center gap-2">
                                <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                <span className="text-xs text-gray-500">{module.icon}</span>
                                <span className="text-sm text-gray-600 flex-1">
                                    {module.title}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
                <Link
                    href="/support"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block mt-3 px-3 py-2 bg-yellow-50 border border-yellow-200 rounded-lg text-center text-sm font-semibold text-yellow-700 hover:bg-yellow-100 transition-colors"
                >
                    Unlock Builder →
                </Link>
            </div>

            {/* Architect Tier */}
            <div className="p-4 border-t border-gray-200">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Architect Tier 🔴
                </div>
                <div className="space-y-1">
                    {architectModules.map((module) => (
                        <button
                            key={module.id}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors opacity-60"
                        >
                            <div className="flex items-center gap-2">
                                <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                <span className="text-xs text-gray-500">{module.icon}</span>
                                <span className="text-sm text-gray-600 flex-1">
                                    {module.title}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
                <Link
                    href="/support"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block mt-3 px-3 py-2 bg-pink-50 border border-pink-200 rounded-lg text-center text-sm font-semibold text-pink-700 hover:bg-pink-100 transition-colors"
                >
                    Unlock Architect →
                </Link>
            </div>
        </>
    );

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-white border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                aria-label="Open menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-80 bg-white border-r-2 border-black h-screen overflow-y-auto sticky top-0 flex-shrink-0">
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar (Overlay) */}
            {isMobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="lg:hidden fixed inset-0 bg-black/50 z-40"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    {/* Sidebar */}
                    <aside className="lg:hidden fixed top-0 left-0 w-80 max-w-[85vw] bg-white border-r-2 border-black h-screen overflow-y-auto z-50 shadow-[8px_0px_0px_0px_rgba(0,0,0,1)]">
                        <SidebarContent />
                    </aside>
                </>
            )}
        </>
    );
}
