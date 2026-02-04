'use client';

import { skills } from '@/lib/skills';
import Link from 'next/link';

export function SkillPreviewCarousel() {
    // Get first 4 skills for preview
    const previewSkills = skills.slice(0, 4);

    return (
        <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-bold text-gray-900">🦞 Lobster Library Preview:</span>
            </div>

            {/* Horizontal scroll container */}
            <div className="relative">
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {previewSkills.map((skill) => (
                        <Link
                            key={skill.id}
                            href="/learn/skills"
                            className="flex-shrink-0 w-32 bg-white border-2 border-black rounded-lg p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all group"
                        >
                            <div className="text-center">
                                <div className="text-3xl mb-2">{skill.icon}</div>
                                <div className="text-xs font-bold text-gray-900 mb-1 line-clamp-2">
                                    {skill.name}
                                </div>
                                <div className="text-[10px] text-gray-600">
                                    ⏱️ {skill.estimatedTime}
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* "+6 more" card */}
                    <Link
                        href="/learn/skills"
                        className="flex-shrink-0 w-32 bg-gray-50 border-2 border-gray-300 rounded-lg p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] transition-all flex items-center justify-center"
                    >
                        <div className="text-center">
                            <div className="text-2xl font-black text-gray-600 mb-1">+6</div>
                            <div className="text-xs font-bold text-gray-600">more skills</div>
                        </div>
                    </Link>
                </div>

                {/* Gradient fade indicators */}
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FFD54F] to-transparent pointer-events-none" />
            </div>

            <Link
                href="/learn/skills"
                className="text-xs text-gray-900 underline hover:text-black mt-2 inline-block"
            >
                View All 10 Skills →
            </Link>
        </div>
    );
}
