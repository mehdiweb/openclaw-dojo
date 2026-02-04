import Link from "next/link";
import { Twitter, Github, MessageCircle } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
            <div className="mx-auto max-w-[1200px] px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Column 1 - Brand */}
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <span className="text-2xl">🦞</span>
                            <span className="font-bold text-lg text-gray-900">OpenClaw Dojo</span>
                        </Link>
                        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                            Learn to deploy AI agents that connect to WhatsApp, Telegram, and more. Free tutorials and professional setup services.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className="w-5 h-5 text-gray-400 hover:text-gray-900 cursor-pointer" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <Github className="w-5 h-5 text-gray-400 hover:text-gray-900 cursor-pointer" />
                            </a>
                            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="w-5 h-5 text-gray-400 hover:text-gray-900 cursor-pointer" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2 - Learning */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Learning</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link href="/learn" className="hover:text-gray-900">All Modules</Link></li>
                            <li><Link href="/learn/before-you-start" className="hover:text-gray-900">Getting Started</Link></li>
                            <li><Link href="/learn/installation" className="hover:text-gray-900">Installation</Link></li>
                            <li><Link href="/supporters" className="hover:text-gray-900">Supporters Wall</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 - Services */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Services</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link href="/support" className="hover:text-gray-900">Hire Me</Link></li>
                            <li><a href="https://buymeacoffee.com/medi4w" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">☕ Buy Me Coffee</a></li>
                            <li><a href="https://www.fiverr.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Fiverr Gigs</a></li>
                            <li><Link href="/support" className="hover:text-gray-900">Custom Development</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 - Resources */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="https://openclaw.army" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">OpenClaw Official</a></li>
                            <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Discord Community</a></li>
                            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">GitHub</a></li>
                            <li><Link href="/support" className="hover:text-gray-900">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
                    <p>© 2026 OpenClaw Dojo. Built with ❤️ by Medhi.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/support">Privacy Policy</Link>
                        <Link href="/support">Terms of Service</Link>
                        <a href="https://buymeacoffee.com/medi4w" target="_blank" rel="noopener noreferrer">Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
