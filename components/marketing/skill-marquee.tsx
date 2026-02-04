'use client';

import { skills } from '@/lib/skills';
import { useEffect, useRef } from 'react';

export function SkillMarquee() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollSpeed = 0.5; // pixels per frame

        const scroll = () => {
            scrollAmount += scrollSpeed;
            if (scrollContainer) {
                scrollContainer.scrollLeft = scrollAmount;

                // Reset when we've scrolled past the first set
                if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                    scrollAmount = 0;
                }
            }
            requestAnimationFrame(scroll);
        };

        const animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, []);

    // Duplicate skills array for seamless loop
    const duplicatedSkills = [...skills, ...skills];

    return (
        <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-100 border-y-2 border-black py-8 mb-12 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 mb-4">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                    🦞 Lobster Library - 10 Pre-Built Skills
                </h2>
                <p className="text-sm text-gray-700 text-center">
                    Production-ready automation skills with 1-click setup
                </p>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-hidden"
                style={{ scrollBehavior: 'auto' }}
            >
                {duplicatedSkills.map((skill, index) => (
                    <div
                        key={`${skill.id}-${index}`}
                        className="flex-shrink-0 w-64 bg-white border-2 border-black rounded-lg p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                    >
                        <div className="flex items-start gap-3">
                            <div className="text-4xl">{skill.icon}</div>
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-900 mb-1">{skill.name}</h3>
                                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                                    {skill.description}
                                </p>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="bg-gray-100 border border-black px-2 py-0.5 rounded">
                                        ⏱️ {skill.estimatedTime}
                                    </span>
                                    <span className="bg-blue-100 border border-black px-2 py-0.5 rounded">
                                        {skill.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-4">
                <a
                    href="/learn/skills"
                    className="inline-block bg-black text-white px-6 py-2 rounded font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                    View All Skills →
                </a>
            </div>
        </div>
    );
}
