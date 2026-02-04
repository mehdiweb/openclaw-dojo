'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface GeraldStickyBarProps {
    moduleTitle?: string;
}

export function GeraldStickyBar({ moduleTitle }: GeraldStickyBarProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Fix hydration: Only run client-side logic after mount
    useEffect(() => {
        setIsMounted(true);

        // Check if user already dismissed
        const dismissed = localStorage.getItem('gerald-dismissed');
        if (dismissed) {
            setIsDismissed(true);
            return;
        }

        const handleScroll = () => {
            // Show after scrolling 40% of page
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            setIsVisible(scrollPercentage > 40);
        };

        window.addEventListener('scroll', handleScroll);
        // Check initial scroll position
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDismiss = () => {
        setIsDismissed(true);
        localStorage.setItem('gerald-dismissed', 'true');
    };

    // Don't render anything until mounted (prevents hydration mismatch)
    if (!isMounted || isDismissed || !isVisible) return null;

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-50"
            style={{
                animation: 'slideUp 0.3s ease-out'
            }}
        >
            {/* Sticky Bar */}
            <div className="bg-[#FFFDF7] border-t-2 border-black shadow-[0px_-4px_12px_rgba(0,0,0,0.1)]">
                <div className="max-w-[1200px] mx-auto px-4 py-3">
                    <div className="flex items-center justify-between gap-4">

                        {/* Left: Molt + Message */}
                        <div className="flex items-center gap-3 flex-1">
                            <span className="text-3xl">🦞</span>
                            <div className="hidden sm:block">
                                <p className="text-sm font-semibold text-gray-900">
                                    Stuck? Get instant help from Gerald
                                </p>
                                <p className="text-xs text-gray-600">
                                    Available for Builder members
                                </p>
                            </div>
                            <div className="block sm:hidden">
                                <p className="text-sm font-semibold text-gray-900">
                                    Need help? Ask Gerald
                                </p>
                            </div>
                        </div>

                        {/* Right: CTA + Dismiss */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="/support"
                                className="px-5 py-2 text-sm font-bold text-black bg-[#FFD54F] border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all whitespace-nowrap"
                            >
                                Learn More
                            </Link>
                            <button
                                onClick={handleDismiss}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                                aria-label="Dismiss"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation keyframes */}
            <style jsx>{`
                @keyframes slideUp {
                    from {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}
