import Link from 'next/link';

export default function SupportersPage() {
    return (
        <div className="min-h-screen bg-[#FFFDF7]">
            <div className="max-w-4xl mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        🦞 Wall of Lobsters
                    </h1>
                    <p className="text-xl text-gray-600">
                        These beautiful humans fueled my 3am debugging sessions
                    </p>
                </div>

                {/* Tier Sections */}
                <div className="space-y-12">
                    {/* Lobster Lords */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl">☕☕☕</span>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Lobster Lords</h2>
                                <p className="text-sm text-gray-600">$10+ supporters</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white/80 rounded-lg p-4 border border-purple-200">
                                <p className="text-gray-500 italic text-center">
                                    Be the first Lobster Lord! 🦞
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Deployers */}
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl">☕☕</span>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Deployers</h2>
                                <p className="text-sm text-gray-600">$5+ supporters</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white/80 rounded-lg p-4 border border-yellow-200">
                                <p className="text-gray-500 italic text-center">
                                    Your name here! ☕
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Fuelers */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl">☕</span>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Fuelers</h2>
                                <p className="text-sm text-gray-600">$3+ supporters</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="bg-white/80 rounded-lg p-4 border border-green-200 text-center">
                                <p className="text-gray-500 italic">Join the crew!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center bg-white border-2 border-gray-200 rounded-lg p-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Want Your Name Here?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Support the creation of free OpenClaw tutorials and get your name on the wall!
                        Every coffee helps me spend more time creating quality content.
                    </p>

                    {/* Buy Me Coffee Widget */}
                    <div className="flex justify-center mb-6">
                        <script
                            type="text/javascript"
                            src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
                            data-name="bmc-button"
                            data-slug="medi4w"
                            data-color="#FFDD00"
                            data-emoji="☕"
                            data-font="Cookie"
                            data-text="Buy me a coffee"
                            data-outline-color="#000000"
                            data-font-color="#000000"
                            data-coffee-color="#ffffff"
                        ></script>
                    </div>

                    <p className="text-sm text-gray-500">
                        <Link href="/learn" className="text-purple-600 hover:underline">
                            Back to learning
                        </Link>
                    </p>
                </div>

                {/* What You Get Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6">
                        <div className="text-3xl mb-3">🎯</div>
                        <h3 className="font-semibold text-gray-900 mb-2">$3 - Fuel the Deploy</h3>
                        <p className="text-sm text-gray-600">
                            Name on this wall + personal thank you
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="text-3xl mb-3">🚀</div>
                        <h3 className="font-semibold text-gray-900 mb-2">$5 - Gerald's Blessing</h3>
                        <p className="text-sm text-gray-600">
                            Everything above + bot deployed in your name
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="text-3xl mb-3">👑</div>
                        <h3 className="font-semibold text-gray-900 mb-2">$10 - Lobster Lord</h3>
                        <p className="text-sm text-gray-600">
                            Everything above + direct Discord access + monthly office hours
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
