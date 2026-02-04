'use client';

import { useState } from 'react';
import Link from 'next/link';
import { skills, getSkillsByCategory, Skill } from '@/lib/skills';
import { SkillCard } from '@/components/library/skill-card';
import { SkillModal } from '@/components/library/skill-modal';

export default function SkillsPage() {
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSkillClick = (skill: Skill) => {
        setSelectedSkill(skill);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedSkill(null), 300);
    };

    // For now, all users are free (no auth yet)
    const isLocked = true;

    return (
        <div className="max-w-6xl mx-auto px-8 py-12">
            {/* Header */}
            <div className="mb-8">
                <div className="text-sm text-gray-600 mb-4">
                    <Link href="/learn" className="hover:text-gray-900">
                        Learning Path
                    </Link>
                    {' '}/{' '}
                    <span className="text-gray-900">Lobster Library</span>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    🦞 Lobster Library
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                    Pre-built automation skills with interactive setup wizards. Unlock with Builder tier.
                </p>
            </div>

            {/* Locked Notice */}
            <div className="bg-yellow-50 border-2 border-black rounded-lg p-6 mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                    <span className="text-3xl">🔒</span>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-2">
                            Unlock with Builder Tier
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Get access to 10 pre-built automation skills with step-by-step setup wizards. Each skill is production-ready and can be deployed in minutes.
                        </p>
                        <Link
                            href="/support"
                            className="inline-block bg-[#FFD54F] border-2 border-black px-6 py-3 rounded-lg font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                        >
                            Upgrade to Builder - $49 →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Skills by Category */}
            <div className="space-y-12">
                {/* Local Business */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span>🏪</span> Local Business
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {getSkillsByCategory('local-business').map((skill) => (
                            <SkillCard
                                key={skill.id}
                                skill={skill}
                                isLocked={isLocked}
                                onClick={() => handleSkillClick(skill)}
                            />
                        ))}
                    </div>
                </div>

                {/* Freelancer */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span>💼</span> Freelancer
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {getSkillsByCategory('freelancer').map((skill) => (
                            <SkillCard
                                key={skill.id}
                                skill={skill}
                                isLocked={isLocked}
                                onClick={() => handleSkillClick(skill)}
                            />
                        ))}
                    </div>
                </div>

                {/* Creator */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span>🎨</span> Creator
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {getSkillsByCategory('creator').map((skill) => (
                            <SkillCard
                                key={skill.id}
                                skill={skill}
                                isLocked={isLocked}
                                onClick={() => handleSkillClick(skill)}
                            />
                        ))}
                    </div>
                </div>

                {/* Team */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span>👥</span> Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {getSkillsByCategory('team').map((skill) => (
                            <SkillCard
                                key={skill.id}
                                skill={skill}
                                isLocked={isLocked}
                                onClick={() => handleSkillClick(skill)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Skill Modal */}
            {selectedSkill && (
                <SkillModal
                    skill={selectedSkill}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    isLocked={isLocked}
                />
            )}
        </div>
    );
}
