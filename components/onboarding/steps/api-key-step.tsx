import { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

interface APIKeyStepProps {
    onNext: (updates: { apiKey: string }) => void;
    onBack: () => void;
}

export function APIKeyStep({ onNext, onBack }: APIKeyStepProps) {
    const [apiKey, setApiKey] = useState('');
    const [copied, setCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleNext = () => {
        if (apiKey.trim()) {
            onNext({ apiKey: apiKey.trim() });
        }
    };

    const setupCommand = `export ANTHROPIC_API_KEY="${apiKey || 'your-api-key-here'}"`;

    return (
        <div className="space-y-6">
            {/* Content from Module 3: First-Time Setup */}
            <div className="text-center mb-6">
                <p className="text-lg text-gray-700">
                    OpenClaw uses Claude AI. You'll need an Anthropic API key.
                </p>
            </div>

            {/* Get API Key */}
            <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-bold text-gray-900 mb-4">Get your API key:</h4>

                <ol className="space-y-3 text-sm text-gray-700 mb-4">
                    <li className="flex items-start gap-2">
                        <span className="font-bold">1.</span>
                        <div>
                            Go to{' '}
                            <a
                                href="https://console.anthropic.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline inline-flex items-center gap-1"
                            >
                                console.anthropic.com
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="font-bold">2.</span>
                        <span>Sign up or log in</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="font-bold">3.</span>
                        <span>Go to "API Keys" section</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="font-bold">4.</span>
                        <span>Click "Create Key" and copy it</span>
                    </li>
                </ol>

                <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-xs text-gray-700">
                    <strong>Free tier:</strong> Anthropic gives you $5 free credit. That's enough for hundreds of messages!
                </div>
            </div>

            {/* Paste API Key */}
            <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-bold text-gray-900 mb-4">Paste your API key:</h4>

                <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="sk-ant-..."
                    className="w-full border-2 border-black rounded px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD54F]"
                />

                <p className="text-xs text-gray-600 mt-2">
                    Your API key is stored locally and never sent to our servers
                </p>
            </div>

            {/* Set Environment Variable */}
            {apiKey && (
                <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-bold text-gray-900 mb-4">Run this command:</h4>

                    <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs flex items-center justify-between break-all">
                        <code>{setupCommand}</code>
                        <button
                            onClick={() => handleCopy(setupCommand)}
                            className="ml-2 p-2 hover:bg-gray-800 rounded flex-shrink-0"
                        >
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                    </div>

                    <p className="text-xs text-gray-600 mt-3">
                        This sets your API key for this terminal session
                    </p>
                </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between">
                <button
                    onClick={onBack}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                >
                    ← Back
                </button>
                <button
                    onClick={handleNext}
                    disabled={!apiKey.trim()}
                    className="bg-[#FFD54F] border-2 border-black px-8 py-3 rounded font-bold text-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next →
                </button>
            </div>
        </div>
    );
}
