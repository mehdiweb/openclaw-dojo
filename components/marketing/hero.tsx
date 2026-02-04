import Link from 'next/link';

interface HeroProps {
    onStartWizard: () => void;
}

export function Hero({ onStartWizard }: HeroProps) {
    return (
        <section className="bg-[#FFFDF7] pt-12 pb-12">
            <div className="mx-auto max-w-[1200px] px-4 text-center">
                <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 mb-6 bg-[#FFD54F] border-2 border-black font-bold text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-full">
                    <span>✨ Festive feature offer: Features spot at $49 only!</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-[#111827] mb-4 tracking-tight">
                    Deploy Your AI Agent<br />in 10 Minutes
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                    The #1 platform to learn OpenClaw deployment. Get your bot running on WhatsApp or Telegram today.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <button
                        onClick={onStartWizard}
                        className="bg-[#FFD54F] border-2 border-black px-8 py-4 rounded-lg font-bold text-lg text-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                        Get Started →
                    </button>
                    <Link
                        href="/learn"
                        className="bg-white border-2 border-black px-8 py-4 rounded-lg font-bold text-lg text-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                        Browse Modules
                    </Link>
                </div>

                <p className="text-sm text-gray-500">
                    Free to start • No credit card required • 10 min setup
                </p>
            </div>
        </section>
    );
}
