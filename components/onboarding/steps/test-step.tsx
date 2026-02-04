import { Channel } from '@/lib/onboarding-flow';

interface TestStepProps {
    channel: Channel;
    onNext: () => void;
    onBack: () => void;
}

export function TestStep({ channel, onNext, onBack }: TestStepProps) {
    return (
        <div className="space-y-6">
            {/* Content from Module 6: Testing Setup */}
            <div className="text-center mb-6">
                <span className="text-5xl mb-3 block">🧪</span>
                <p className="text-lg text-gray-700">
                    Let's test your bot!
                </p>
            </div>

            {/* Test Instructions */}
            <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-bold text-gray-900 mb-4">Send a test message:</h4>

                <ol className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-700">
                        <span className="font-bold text-[#FFD54F] bg-black rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
                            1
                        </span>
                        <div>
                            <p className="font-semibold mb-1">
                                Open {channel === 'whatsapp' ? 'WhatsApp' : 'Telegram'} on your phone
                            </p>
                            <p className="text-sm text-gray-600">
                                {channel === 'whatsapp'
                                    ? 'Find the chat with your linked device'
                                    : 'Search for your bot by the username you created'
                                }
                            </p>
                        </div>
                    </li>

                    <li className="flex items-start gap-3 text-gray-700">
                        <span className="font-bold text-[#FFD54F] bg-black rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
                            2
                        </span>
                        <div>
                            <p className="font-semibold mb-1">
                                Send a message
                            </p>
                            <div className="bg-gray-100 border border-gray-300 rounded px-3 py-2 font-mono text-sm mt-2">
                                Hello! Are you there?
                            </div>
                        </div>
                    </li>

                    <li className="flex items-start gap-3 text-gray-700">
                        <span className="font-bold text-[#FFD54F] bg-black rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
                            3
                        </span>
                        <div>
                            <p className="font-semibold mb-1">
                                Wait for a reply
                            </p>
                            <p className="text-sm text-gray-600">
                                Your bot should respond within a few seconds
                            </p>
                        </div>
                    </li>
                </ol>
            </div>

            {/* What to Expect */}
            <div className="bg-green-50 border-2 border-black rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">What you should see:</h4>
                <p className="text-gray-700 mb-3">
                    Your bot will respond with a friendly message powered by Claude AI. It can:
                </p>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        Answer questions
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        Remember the conversation
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        Help with tasks
                    </li>
                </ul>
            </div>

            {/* Troubleshooting */}
            <details className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                    Not working? Click here for help
                </summary>
                <div className="mt-3 space-y-2 text-sm text-gray-700">
                    <p><strong>Common issues:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Make sure OpenClaw is still running in your terminal</li>
                        <li>Check that your API key is set correctly</li>
                        <li>For WhatsApp: Make sure you scanned the QR code</li>
                        <li>For Telegram: Verify your bot token is correct</li>
                        <li>Try restarting OpenClaw: `openclaw restart`</li>
                    </ul>
                </div>
            </details>

            {/* Navigation */}
            <div className="flex items-center justify-between">
                <button
                    onClick={onBack}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                >
                    ← Back
                </button>
                <button
                    onClick={onNext}
                    className="bg-[#FFD54F] border-2 border-black px-8 py-3 rounded font-bold text-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                    It works! 🎉
                </button>
            </div>
        </div>
    );
}
