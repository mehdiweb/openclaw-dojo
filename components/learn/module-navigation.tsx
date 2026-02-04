'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { modules } from '@/lib/modules';

interface ModuleNavigationProps {
    currentSlug: string;
}

export function ModuleNavigation({ currentSlug }: ModuleNavigationProps) {
    const currentIndex = modules.findIndex(m => m.slug === currentSlug);
    const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
    const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

    return (
        <div className="flex items-center justify-between border-t border-gray-200 pt-8 mt-12">
            {/* Previous button */}
            {prevModule ? (
                <Link
                    href={`/learn/${prevModule.slug}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors group"
                >
                    <ChevronLeft className="w-5 h-5" />
                    <div className="text-left">
                        <div className="text-xs text-gray-500">Previous</div>
                        <div className="font-medium group-hover:underline">{prevModule.title}</div>
                    </div>
                </Link>
            ) : (
                <div /> // Empty div to maintain spacing
            )}

            {/* Next button */}
            {nextModule ? (
                <Link
                    href={`/learn/${nextModule.slug}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors ml-auto group"
                >
                    <div className="text-right">
                        <div className="text-xs text-gray-500">Next</div>
                        <div className="font-medium group-hover:underline">{nextModule.title}</div>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                </Link>
            ) : null}
        </div>
    );
}
