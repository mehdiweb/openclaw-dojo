import Link from 'next/link';
import { Rocket, Zap, Crown, CheckCircle, Lock } from 'lucide-react';
import { SkillMarquee } from '@/components/marketing/skill-marquee';
import { ComparisonTable } from '@/components/marketing/comparison-table';
import { TrustSignals } from '@/components/marketing/trust-signals';
import { ProgressBar } from '@/components/marketing/progress-bar';
import { EnterpriseCTA } from '@/components/marketing/enterprise-cta';

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-[#FFFDF7]">
            {/* Hero Section - Aspirational Framing */}
            <div className="bg-white border-b-2 border-black">
                <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16">
                    <div className="text-center">
                        <div className="inline-block bg-green-100 border-2 border-black px-4 py-1 rounded-full text-sm font-bold text-green-800 mb-4">
                            🎓 You've Mastered the Basics
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
                            Now Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Anything</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
                            Unlock 10 pre-built skills, 7 advanced modules, and join 500+ builders shipping production AI agents.
                        </p>

                        {/* Progress Bar */}
                        <div className="max-w-2xl mx-auto mb-6">
                            <ProgressBar completed={13} total={20} />
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 mb-6">
                            <span className="flex items-center gap-1.5">
                                ✓ <strong>10 pre-built skills</strong> with 1-click setup
                            </span>
                            <span className="flex items-center gap-1.5">
                                ✓ <strong>7 advanced modules</strong> (40+ hours)
                            </span>
                            <span className="flex items-center gap-1.5">
                                ✓ <strong>500+ builders</strong> in community
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
                {/* What You're Missing - Loss Aversion */}
                <div className="bg-orange-50 border-2 border-black rounded-lg p-6 mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                        ⚠️ Still on Free Tier?
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Every day you wait, you're:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-orange-600 font-bold mt-0.5">❌</span>
                            <span>Manually configuring what Builder users click once</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-orange-600 font-bold mt-0.5">❌</span>
                            <span>Debugging alone what Architects solve in Discord in 10 minutes</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-orange-600 font-bold mt-0.5">❌</span>
                            <span>Building from scratch what the Lobster Library gives you instantly</span>
                        </li>
                    </ul>
                </div>

                {/* Pricing Tiers - Learning Platform Model */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">

                    {/* Free Tier - Context */}
                    <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 opacity-75">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gray-200 border-2 border-gray-400 rounded flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-gray-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-700">Free</h3>
                                <p className="text-xs text-gray-500">Foundation</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-baseline gap-1 mb-1">
                                <span className="text-4xl font-black text-gray-700">$0</span>
                                <span className="text-sm text-gray-500">forever</span>
                            </div>
                        </div>

                        <ul className="space-y-2.5 mb-6 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-gray-500 font-bold mt-0.5">✓</span>
                                <span className="text-gray-600">13 core modules</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-500 font-bold mt-0.5">✓</span>
                                <span className="text-gray-600">Basic deployment guides</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-500 font-bold mt-0.5">✓</span>
                                <span className="text-gray-600">Community Discord</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-500 font-bold mt-0.5">✓</span>
                                <span className="text-gray-600">Gerald AI (3 questions/day)</span>
                            </li>
                        </ul>

                        <div className="block w-full bg-gray-200 border-2 border-gray-400 text-center py-3 rounded font-bold text-gray-500 cursor-not-allowed">
                            You're Here
                        </div>
                    </div>

                    {/* Builder Tier - Yellow Theme (Most Popular) */}
                    <div className="bg-[#FFD54F] border-2 border-black rounded-lg p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative md:-mt-2 md:scale-105 md:col-span-2">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-[#FFD54F] px-4 py-1 rounded-full text-xs font-bold border-2 border-black">
                            MOST POPULAR
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-white border-2 border-black rounded flex items-center justify-center">
                                <Rocket className="w-5 h-5 text-gray-900" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Builder</h3>
                                <p className="text-xs text-gray-800">Done-For-You Automation</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-4xl font-black text-gray-900">$49</span>
                                <span className="text-sm text-gray-800">one-time</span>
                            </div>
                            <div className="mt-2 text-xs text-gray-700 bg-white/50 border border-black/20 rounded px-2 py-1">
                                💰 <strong>$600+ value</strong> for $49
                            </div>
                        </div>

                        <ul className="space-y-2.5 mb-6 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-gray-900 font-bold mt-0.5">✓</span>
                                <span className="text-gray-900"><strong>Everything in Free</strong> (13 modules)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-900 font-bold mt-0.5">🦞</span>
                                <span className="text-gray-900"><strong>Lobster Library</strong> - 10 pre-built skills</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-900 font-bold mt-0.5">🎯</span>
                                <span className="text-gray-900"><strong>Setup Wizards</strong> - Deploy in 5 minutes</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-900 font-bold mt-0.5">📚</span>
                                <span className="text-gray-900"><strong>4 Advanced Modules</strong> - Defense, Tools, Browser, Workflows</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-900 font-bold mt-0.5">🤖</span>
                                <span className="text-gray-900"><strong>Unlimited Gerald AI</strong> - Your automation coach</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-900 font-bold mt-0.5">💬</span>
                                <span className="text-gray-900"><strong>Priority Discord</strong> - Support team (&lt;24hr)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-900 font-bold mt-0.5">🔧</span>
                                <span className="text-gray-900"><strong>Help & Customization</strong> - We'll help you customize</span>
                            </li>
                        </ul>

                        <div className="bg-white/80 border border-black/20 rounded p-3 mb-4 text-xs italic text-gray-800">
                            "The setup wizards alone saved me 15 hours. Worth every penny." - @dev_builder
                        </div>

                        <a
                            href="https://buymeacoffee.com/medi4w/membership"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-black border-2 border-black text-center py-3 rounded font-bold text-[#FFD54F] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                        >
                            Unlock Builder →
                        </a>
                    </div>

                    {/* Architect Tier - Premium Theme */}
                    <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-red-100 border-2 border-black rounded flex items-center justify-center">
                                <Crown className="w-5 h-5 text-red-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Architect</h3>
                                <p className="text-xs text-gray-600">Private Circle + Business</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-4xl font-black text-gray-900">$249</span>
                                <span className="text-sm text-gray-500">one-time</span>
                            </div>
                            <div className="mt-2 text-xs text-gray-600 bg-red-50 border border-red-200 rounded px-2 py-1">
                                💎 <strong>$1,000+ value</strong> for $249
                            </div>
                        </div>

                        <ul className="space-y-2.5 mb-6 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold mt-0.5">✓</span>
                                <span className="text-gray-700"><strong>Everything in Builder</strong></span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold mt-0.5">🎯</span>
                                <span className="text-gray-700"><strong>3 Master Modules</strong> - Multi-Agent, Plugins, Production</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold mt-0.5">👥</span>
                                <span className="text-gray-700"><strong>Private Inner Circle</strong> - Exclusive community</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold mt-0.5">🔒</span>
                                <span className="text-gray-700"><strong>Exclusive Private Skills</strong> - Not in Builder</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold mt-0.5">💼</span>
                                <span className="text-gray-700"><strong>Business Opportunities</strong> - Monetization strategies</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold mt-0.5">📞</span>
                                <span className="text-gray-700"><strong>1-on-1 Priority Support</strong> - Direct access</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold mt-0.5">💎</span>
                                <span className="text-gray-700"><strong>Commercial License</strong> - Use in client projects</span>
                            </li>
                        </ul>

                        <a
                            href="https://buymeacoffee.com/medi4w/membership"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-white border-2 border-black text-center py-3 rounded font-bold text-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                        >
                            Go Architect →
                        </a>
                    </div>
                </div>

                {/* Comparison Table */}
                <ComparisonTable />

                {/* Trust Signals */}
                <TrustSignals />

                {/* Skill Marquee - Auto-scrolling showcase */}
                <SkillMarquee />

                {/* 30-Day Guarantee */}
                <div className="bg-green-50 border-2 border-black rounded-lg p-6 text-center mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        🛡️ 30-Day "Love It or Leave It" Guarantee
                    </h3>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Try Builder for a month. If you don't ship at least one production agent or save 10+ hours,
                        email me and I'll refund you personally. No questions asked.
                    </p>
                </div>

                {/* Enterprise CTA - Replaces Deployment Services */}
                <EnterpriseCTA />

                {/* Support Free Content */}
                <div className="bg-white border-2 border-black rounded-lg p-8 text-center mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        ☕ Love the Free Content?
                    </h2>
                    <p className="text-gray-700 mb-4 max-w-xl mx-auto">
                        You just learned <strong>$2,000 worth of AI agent knowledge for $0</strong>.
                    </p>
                    <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm">
                        (That's 13 modules × 2 hours × $75/hr developer rate)
                    </p>
                    <p className="text-gray-700 mb-6 max-w-xl mx-auto">
                        If it helped you, buy me a coffee to keep the guides updated and free for everyone!
                    </p>

                    <div className="flex justify-center">
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
                </div >

                {/* FAQ */}
                < div className="max-w-3xl mx-auto" >
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
                        Questions?
                    </h2>

                    <div className="space-y-4">
                        <details className="bg-white border-2 border-black rounded-lg p-5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group">
                            <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                                What's the difference between Builder tier and deployment service?
                                <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <p className="text-gray-700 mt-3 text-sm">
                                <strong>Builder tier</strong> gives you the tools to build yourself (pre-built skills, wizards, support).
                                <strong>Deployment service</strong> is me doing it for you. Choose Builder if you want to learn and save money long-term.
                                Choose deployment if you're time-poor and just want it working ASAP.
                            </p>
                        </details>

                        <details className="bg-white border-2 border-black rounded-lg p-5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group">
                            <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                                Can I cancel anytime?
                                <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <p className="text-gray-700 mt-3 text-sm">
                                Yes! Cancel anytime, no questions asked. You'll keep access until the end of your billing period.
                            </p>
                        </details>

                        <details className="bg-white border-2 border-black rounded-lg p-5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group">
                            <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                                Do I need Builder tier to use the free modules?
                                <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <p className="text-gray-700 mt-3 text-sm">
                                Nope! All 13 core modules are 100% free forever. Builder tier just unlocks advanced features and pre-built skills to save you time.
                            </p>
                        </details>

                        <details className="bg-white border-2 border-black rounded-lg p-5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group">
                            <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                                What if I'm not technical enough?
                                <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <p className="text-gray-700 mt-3 text-sm">
                                If you completed the free modules, you're technical enough for Builder tier. The setup wizards make everything point-and-click.
                                If you're still nervous, start with the deployment service and upgrade to Builder later.
                            </p>
                        </details>
                    </div>
                </div >

                {/* Final CTA */}
                < div className="mt-12 text-center" >
                    <p className="text-gray-600 text-sm">
                        Still deciding? <Link href="/learn" className="underline font-semibold">Continue learning for free</Link> or <a href="https://discord.com" className="underline font-semibold">ask questions in Discord</a>
                    </p>
                </div >
            </div >
        </div >
    );
}
