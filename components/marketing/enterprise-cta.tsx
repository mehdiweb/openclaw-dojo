'use client';

export function EnterpriseCTA() {
    return (
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-black rounded-lg p-8 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
                    backgroundSize: '10px 10px'
                }} />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <div className="inline-block bg-purple-200 border-2 border-black px-4 py-1 rounded-full text-sm font-bold text-purple-900 mb-4">
                    🏢 ENTERPRISE PLAN
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
                    Need a Custom Solution?
                </h2>

                <p className="text-lg text-gray-700 mb-6">
                    Want us to build and deploy your AI agent for you? Our team will handle everything from setup to production.
                </p>

                <div className="bg-white border-2 border-black rounded-lg p-6 mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="grid sm:grid-cols-3 gap-4 text-sm">
                        <div>
                            <div className="text-2xl mb-2">🎯</div>
                            <div className="font-bold text-gray-900">Custom Build</div>
                            <div className="text-gray-600">Tailored to your needs</div>
                        </div>
                        <div>
                            <div className="text-2xl mb-2">🚀</div>
                            <div className="font-bold text-gray-900">Full Deployment</div>
                            <div className="text-gray-600">We handle everything</div>
                        </div>
                        <div>
                            <div className="text-2xl mb-2">🤝</div>
                            <div className="font-bold text-gray-900">Ongoing Support</div>
                            <div className="text-gray-600">Dedicated team</div>
                        </div>
                    </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-800">
                        <strong>🔥 Secret Sauce:</strong> This entire platform runs on OpenClaw AI agents.
                        We'll give you the same technology powering our own business.
                    </p>
                </div>

                <a
                    href="/chat?agent=sales"
                    className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                    💬 Speak with OpenClaw Sales Agent →
                </a>

                <p className="text-xs text-gray-600 mt-3">
                    Chat with our AI sales agent (powered by OpenClaw) • Get instant quote • No commitment
                </p>
            </div>
        </div>
    );
}
