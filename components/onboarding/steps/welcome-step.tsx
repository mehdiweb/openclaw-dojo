interface WelcomeStepProps {
    onNext: () => void;
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
    return (
        <div className="space-y-6">
            {/* Content from Module 1: Before You Start */}
            <div className="text-center">
                <span className="text-6xl mb-4 block">🦞</span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Let's Deploy Your AI Agent
                </h3>
                <p className="text-lg text-gray-700 max-w-xl mx-auto">
                    In the next 10 minutes, you'll have a working AI agent connected to WhatsApp or Telegram.
                </p>
            </div>

            {/* What You'll Need */}
            <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-bold text-gray-900 mb-4">What You'll Need:</h4>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold mt-0.5">✓</span>
                        <div>
                            <strong>A computer</strong> (macOS, Linux, or Windows)
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold mt-0.5">✓</span>
                        <div>
                            <strong>Terminal access</strong> (we'll guide you)
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold mt-0.5">✓</span>
                        <div>
                            <strong>Anthropic API key</strong> (free tier works)
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold mt-0.5">✓</span>
                        <div>
                            <strong>WhatsApp or Telegram</strong> on your phone
                        </div>
                    </li>
                </ul>
            </div>

            {/* What You'll Build */}
            <div className="bg-yellow-50 border-2 border-black rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">What You'll Build:</h4>
                <p className="text-gray-700 mb-3">
                    A fully functional AI agent that can:
                </p>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                        <span className="text-blue-600">→</span>
                        Respond to messages on WhatsApp or Telegram
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-blue-600">→</span>
                        Remember conversations
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-blue-600">→</span>
                        Run 24/7 on your computer
                    </li>
                </ul>
            </div>

            {/* CTA */}
            <button
                onClick={onNext}
                className="w-full bg-[#FFD54F] border-2 border-black py-4 rounded font-bold text-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-lg"
            >
                Let's Get Started →
            </button>

            <p className="text-center text-sm text-gray-600">
                Takes about 10 minutes • Your progress is saved
            </p>
        </div>
    );
}
