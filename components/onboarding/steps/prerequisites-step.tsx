import { useState } from 'react';
import { OS, INSTALL_COMMANDS } from '@/lib/onboarding-flow';
import { Copy, Check } from 'lucide-react';

interface PrerequisitesStepProps {
    os: OS;
    onNext: () => void;
    onBack: () => void;
}

export function PrerequisitesStep({ os, onNext, onBack }: PrerequisitesStepProps) {
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    const commands = INSTALL_COMMANDS[os];

    return (
        <div className="space-y-6">
            {/* Content from Module 1: Prerequisites */}
            <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-bold text-gray-900 mb-4">Check if you have Node.js and npm:</h4>

                {/* Check Node */}
                <div className="mb-4">
                    <p className="text-sm text-gray-700 mb-2">1. Check Node.js version:</p>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm flex items-center justify-between">
                        <code>{commands.checkNode}</code>
                        <button
                            onClick={() => handleCopy(commands.checkNode, 'node')}
                            className="ml-2 p-1 hover:bg-gray-800 rounded"
                        >
                            {copied === 'node' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                {/* Check npm */}
                <div className="mb-4">
                    <p className="text-sm text-gray-700 mb-2">2. Check npm version:</p>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm flex items-center justify-between">
                        <code>{commands.checkNpm}</code>
                        <button
                            onClick={() => handleCopy(commands.checkNpm, 'npm')}
                            className="ml-2 p-1 hover:bg-gray-800 rounded"
                        >
                            {copied === 'npm' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                <p className="text-sm text-gray-600">
                    If both commands show version numbers, you're good to go! ✓
                </p>
            </div>

            {/* Install Node if needed */}
            <div className="bg-yellow-50 border-2 border-black rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">Don't have Node.js?</h4>
                <p className="text-sm text-gray-700 mb-3">
                    No problem! Here's how to install it:
                </p>

                {os === 'macos' && (
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm flex items-center justify-between">
                        <code>{commands.installNode}</code>
                        <button
                            onClick={() => handleCopy(commands.installNode, 'install')}
                            className="ml-2 p-1 hover:bg-gray-800 rounded"
                        >
                            {copied === 'install' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                    </div>
                )}

                {os === 'linux' && (
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm flex items-center justify-between">
                        <code>{commands.installNode}</code>
                        <button
                            onClick={() => handleCopy(commands.installNode, 'install')}
                            className="ml-2 p-1 hover:bg-gray-800 rounded"
                        >
                            {copied === 'install' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                    </div>
                )}

                {os === 'windows' && (
                    <div className="text-sm text-gray-700">
                        <p className="mb-2">Download from: <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">nodejs.org</a></p>
                        <p className="text-xs text-gray-600">Choose the LTS (Long Term Support) version</p>
                    </div>
                )}
            </div>

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
                    I have Node.js →
                </button>
            </div>
        </div>
    );
}
