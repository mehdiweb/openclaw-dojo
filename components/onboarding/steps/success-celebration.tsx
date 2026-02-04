import { useEffect, useState } from 'react';
import { Channel } from '@/lib/onboarding-flow';
import Link from 'next/link';

interface SuccessCelebrationProps {
    channel: Channel;
    onComplete: () => void;
    onClose: () => void;
}

export function SuccessCelebration({ channel, onComplete, onClose }: SuccessCelebrationProps) {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        // Trigger celebration animation
        setShowConfetti(true);
        onComplete();
    }, [onComplete]);

    return (
        <div className="relative space-y-6">
            {/* Confetti Animation */}
            {showConfetti && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="confetti"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 0.5}s`,
                                backgroundColor: ['#FFD54F', '#000000', '#4CAF50', '#2196F3'][Math.floor(Math.random() * 4)]
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Success Message */}
            <div className="text-center relative z-10">
                <div className="text-7xl mb-6 animate-bounce">
                    🎉 🦞 🎉
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4 animate-scale">
                    You Did It!
                </h3>
                <p className="text-xl text-gray-700 mb-2">
                    Your AI agent is live on {channel === 'whatsapp' ? 'WhatsApp' : 'Telegram'}!
                </p>
                <p className="text-gray-600">
                    You just deployed your first AI automation. That's huge! 🚀
                </p>
            </div>

            {/* What You Built */}
            <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-10">
                <h4 className="font-bold text-gray-900 mb-4">What you built:</h4>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <div>
                            <strong>Installed OpenClaw</strong>
                            <p className="text-sm text-gray-600">The AI agent framework</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <div>
                            <strong>Connected {channel === 'whatsapp' ? 'WhatsApp' : 'Telegram'}</strong>
                            <p className="text-sm text-gray-600">Your first messaging channel</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <div>
                            <strong>Powered by Claude AI</strong>
                            <p className="text-sm text-gray-600">Smart, context-aware responses</p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Next Steps */}
            <div className="bg-[#FFD54F] border-2 border-black rounded-lg p-6 relative z-10">
                <h4 className="font-bold text-gray-900 mb-4">What's next?</h4>
                <div className="space-y-3">
                    <Link
                        href="/learn"
                        className="block bg-white border-2 border-black rounded px-4 py-3 font-semibold text-gray-900 hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                        📚 Explore Advanced Modules
                    </Link>
                    <Link
                        href="/learn#lobster-library"
                        className="block bg-white border-2 border-black rounded px-4 py-3 font-semibold text-gray-900 hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                        🦞 Browse Pre-Built Skills
                    </Link>
                    <Link
                        href="/support"
                        className="block bg-black border-2 border-black rounded px-4 py-3 font-semibold text-[#FFD54F] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                        🚀 Upgrade to Builder Tier
                    </Link>
                </div>
            </div>

            {/* Upgrade Pitch */}
            <div className="bg-white border-2 border-black rounded-lg p-6 relative z-10">
                <h4 className="font-bold text-gray-900 mb-3">Want to unlock more?</h4>
                <p className="text-gray-700 mb-4">
                    With <strong>Builder tier ($49)</strong>, you get:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-center gap-2">
                        <span className="text-blue-600">→</span>
                        Multi-channel support (WhatsApp + Telegram + more)
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-blue-600">→</span>
                        10 pre-built automation skills
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-blue-600">→</span>
                        Interactive setup wizards
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-blue-600">→</span>
                        Advanced modules & deployment guides
                    </li>
                </ul>
            </div>

            {/* Close Button */}
            <button
                onClick={onClose}
                className="w-full bg-gray-100 border-2 border-black py-3 rounded font-semibold text-gray-900 hover:bg-gray-200 transition-colors relative z-10"
            >
                Close
            </button>

            {/* CSS for confetti animation */}
            <style jsx>{`
                @keyframes confetti-fall {
                    0% {
                        transform: translateY(-100vh) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(720deg);
                        opacity: 0;
                    }
                }

                @keyframes scale-in {
                    0% {
                        transform: scale(0.8);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .confetti {
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    animation: confetti-fall 3s ease-out forwards;
                }

                .animate-scale {
                    animation: scale-in 0.5s ease-out;
                }
            `}</style>
        </div>
    );
}
