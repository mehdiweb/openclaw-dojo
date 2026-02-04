import { Skill } from '@/lib/skills';
import { Lock } from 'lucide-react';

interface SkillCardProps {
    skill: Skill;
    isLocked: boolean;
    onClick: () => void;
}

export function SkillCard({ skill, isLocked, onClick }: SkillCardProps) {
    return (
        <button
            onClick={onClick}
            className="w-full text-left bg-white border-2 border-black rounded-lg p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
            {/* Icon + Title */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <div>
                        <h3 className="font-bold text-gray-900 text-base leading-tight">
                            {skill.name}
                        </h3>
                        <p className="text-xs text-gray-600 mt-0.5">
                            {skill.estimatedTime} setup
                        </p>
                    </div>
                </div>
                {isLocked && (
                    <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                )}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-3">
                {skill.description}
            </p>

            {/* For Who (first 2) */}
            <div className="text-xs text-gray-600">
                <span className="font-semibold">Perfect for:</span>{' '}
                {skill.forWho.slice(0, 2).join(', ')}
                {skill.forWho.length > 2 && '...'}
            </div>

            {/* Tier Badge */}
            <div className="mt-3 pt-3 border-t border-gray-200">
                <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">
                    {isLocked && <Lock className="w-3 h-3" />}
                    Builder Tier
                </span>
            </div>
        </button>
    );
}
