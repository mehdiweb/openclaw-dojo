"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-[#FFFDF7] border-b border-gray-200">
            <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 lg:px-6">
                {/* Logo Area */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl">🦞</span>
                        <span className="font-bold text-xl tracking-tight text-gray-900">
                            OpenClaw<span className="text-gray-400">Dojo</span>
                        </span>
                    </Link>

                    {/* Search Bar (Fake for visual match) */}
                    <div className="hidden md:flex items-center px-3 py-1.5 bg-gray-100 rounded-full w-64 border border-transparent focus-within:border-gray-300 focus-within:bg-white transition-all">
                        <Search className="w-4 h-4 text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search modules..."
                            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-400"
                        />
                    </div>
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/learn" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                        Learn
                    </Link>
                    <Link href="/supporters" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                        Supporters
                    </Link>

                    <div className="h-4 w-px bg-gray-300 mx-1"></div>

                    <Link href="https://buymeacoffee.com/medi4w" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-900 hover:underline">
                        ☕ Support
                    </Link>

                    <Link
                        href="/support"
                        className="px-5 py-2 text-sm font-bold text-black bg-[#FFD54F] border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                        Hire Me
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>
        </header>
    );
}
