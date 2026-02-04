import { useState } from 'react';
import { OS, INSTALL_COMMANDS } from '@/lib/onboarding-flow';
import { Copy, Check } from 'lucide-react';

interface InstallationStepProps {
    os: OS;
    onNext: () => void;
    onBack: () => void;
}

export function InstallationStep({ os, onNext, onBack }: InstallationStepProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const installCommand = INSTALL_COMMANDS[os].installOpenClaw;

    return (
        <div className="space-y-6">
            {/* Content from Module 2: Installation */}
            <div className="text-center mb-6">
                <p className="text-lg text-gray-700">
                    Let's install OpenClaw on your system
                </p>
            </div>

            {/* Installation Command */}
            <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-bold text-gray-900 mb-4">Run this command:</h4>

                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm flex items-center justify-between mb-4">
                    <code>{installCommand}</code>
                    <button
                        onClick={() => handleCopy(installCommand)}
                        className="ml-2 p-2 hover:bg-gray-800 rounded"
                    >
                        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                </div>

                <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>What this does:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Downloads OpenClaw from npm</li>
                        <li>Installs it globally on your system</li>
                        <li>Makes the `openclaw` command available</li>
                    </ul>
                </div>
            </div>

            {/* What to expect */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">What you'll see:</h4>
                <p className="text-sm text-gray-700">
                    The installation will take 1-2 minutes. You'll see progress bars and package names scrolling by. When it's done, you'll see "successfully installed" or similar.
                </p>
            </div>

            {/* Verify Installation */}
            <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-bold text-gray-900 mb-4">Verify it worked:</h4>

                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm mb-3">
                    <code>openclaw --version</code>
                </div>

                <p className="text-sm text-gray-600">
                    If you see a version number, you're all set! ✓
                </p>
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
                    Installed! →
                </button>
            </div>
        </div>
    );
}
