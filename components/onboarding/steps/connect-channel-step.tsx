import { useState } from 'react';
import { Channel, OS, CHANNEL_SETUP } from '@/lib/onboarding-flow';
import { Copy, Check } from 'lucide-react';

interface ConnectChannelStepProps {
    channel: Channel;
    os: OS;
    onNext: () => void;
    onBack: () => void;
}

export function ConnectChannelStep({ channel, os, onNext, onBack }: ConnectChannelStepProps) {
    const [copied, setCopied] = useState(false);
    const [botToken, setBotToken] = useState('');

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const setup = CHANNEL_SETUP[channel];

    return (
        <div className="space-y-6">
            {/* Content from Module 4 (WhatsApp) or Module 5 (Telegram) */}
            <div className="text-center mb-6">
                <span className="text-5xl mb-3 block">
                    {channel === 'whatsapp' ? '💬' : '✈️'}
                </span>
                <p className="text-lg text-gray-700">
                    Let's connect {channel === 'whatsapp' ? 'WhatsApp' : 'Telegram'}
                </p>
            </div>

            {/* Connection Command */}
            <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-bold text-gray-900 mb-4">Run this command:</h4>

                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm flex items-center justify-between mb-4">
                    <code>{setup.command}</code>
                    <button
                        onClick={() => handleCopy(setup.command)}
                        className="ml-2 p-2 hover:bg-gray-800 rounded"
                    >
                        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Steps */}
            <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-bold text-gray-900 mb-4">Follow these steps:</h4>

                <ol className="space-y-3">
                    {setup.steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700">
                            <span className="font-bold text-[#FFD54F] bg-black rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
                                {index + 1}
                            </span>
                            <span>{step}</span>
                        </li>
                    ))}
                </ol>
            </div>

            {/* Telegram Token Input */}
            {channel === 'telegram' && (
                <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-bold text-gray-900 mb-4">Paste your bot token:</h4>

                    <input
                        type="text"
                        value={botToken}
                        onChange={(e) => setBotToken(e.target.value)}
                        placeholder="1234567890:ABCdefGHIjklMNOpqrsTUVwxyz"
                        className="w-full border-2 border-black rounded px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD54F]"
                    />
                </div>
            )}

            {/* WhatsApp QR Code Note */}
            {channel === 'whatsapp' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                        <strong>Note:</strong> A QR code will appear in your terminal. Keep the terminal open and scan it with your phone. The connection will be saved automatically.
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
                    onClick={onNext}
                    disabled={channel === 'telegram' && !botToken.trim()}
                    className="bg-[#FFD54F] border-2 border-black px-8 py-3 rounded font-bold text-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Connected! →
                </button>
            </div>
        </div>
    );
}
