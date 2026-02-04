'use client';

import { Skill } from '@/lib/skills';
import { X, Lock, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface SkillModalProps {
    skill: Skill;
    isOpen: boolean;
    onClose: () => void;
    isLocked: boolean;
}

export function SkillModal({ skill, isOpen, onClose, isLocked }: SkillModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#FFFDF7] border-2 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-[#FFFDF7] border-b-2 border-black p-6 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-4xl">{skill.icon}</span>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                {skill.name}
                            </h2>
                            <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                                <Clock className="w-4 h-4" />
                                {skill.estimatedTime} setup
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Description */}
                    <div>
                        <p className="text-lg text-gray-700">
                            {skill.description}
                        </p>
                    </div>

                    {/* Who It's For */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="text-lg">👥</span>
                            Who It's For
                        </h3>
                        <ul className="space-y-2">
                            {skill.forWho.map((who, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                    <span className="text-green-600 mt-0.5">✓</span>
                                    <span>{who}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* What It Does */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="text-lg">⚡</span>
                            What It Does
                        </h3>
                        <ul className="space-y-2">
                            {skill.whatItDoes.map((what, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span>{what}</span>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* CTA */}
                    {isLocked ? (
                        <div className="bg-yellow-50 border-2 border-black rounded-lg p-6">
                            <div className="flex items-start gap-3 mb-4">
                                <Lock className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">
                                        Unlock Setup Wizard
                                    </h3>
                                    <p className="text-sm text-gray-700 mb-3">
                                        Get step-by-step guidance from Gerald to set up this skill. Included in Builder Tier.
                                    </p>
                                    <ul className="text-sm text-gray-700 space-y-1 mb-4">
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-600">✓</span>
                                            Interactive setup wizard
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-600">✓</span>
                                            Gerald AI helper
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-600">✓</span>
                                            Pre-built templates
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-600">✓</span>
                                            Tested & validated configs
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link
                                href="/support"
                                className="block w-full bg-[#FFD54F] border-2 border-black text-center py-3 rounded font-bold text-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                            >
                                Upgrade to Builder - $49
                            </Link>
                        </div>
                    ) : (
                        <div className="bg-green-50 border-2 border-black rounded-lg p-6">
                            <h3 className="font-bold text-gray-900 mb-2">
                                Ready to Set Up?
                            </h3>
                            <p className="text-sm text-gray-700 mb-4">
                                Gerald will guide you through each step. Takes about {skill.estimatedTime}.
                            </p>
                            <button
                                className="w-full bg-black border-2 border-black text-center py-3 rounded font-bold text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                            >
                                Start Setup Wizard →
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
