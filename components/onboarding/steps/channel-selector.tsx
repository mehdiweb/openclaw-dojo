import { Channel } from '@/lib/onboarding-flow';

interface ChannelSelectorProps {
    selectedChannel?: Channel;
    onNext: (updates: { channel: Channel }) => void;
    onBack: () => void;
}

export function ChannelSelector({ selectedChannel, onNext, onBack }: ChannelSelectorProps) {
    const handleSelect = (channel: Channel) => {
        onNext({ channel });
    };

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <p className="text-lg text-gray-700">
                    Which messaging app do you want to connect?
                </p>
                <p className="text-sm text-gray-600 mt-2">
                    (You can add more channels later with Builder tier)
                </p>
            </div>

            {/* Channel Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {/* WhatsApp */}
                <button
                    onClick={() => handleSelect('whatsapp')}
                    className={`bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all ${selectedChannel === 'whatsapp' ? 'ring-4 ring-[#FFD54F]' : ''
                        }`}
                >
                    <div className="text-6xl mb-4">💬</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Connect via QR code
                    </p>
                    <ul className="text-xs text-gray-600 text-left space-y-1">
                        <li>✓ Most popular worldwide</li>
                        <li>✓ Easy QR code setup</li>
                        <li>✓ Works with personal number</li>
                    </ul>
                </button>

                {/* Telegram */}
                <button
                    onClick={() => handleSelect('telegram')}
                    className={`bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all ${selectedChannel === 'telegram' ? 'ring-4 ring-[#FFD54F]' : ''
                        }`}
                >
                    <div className="text-6xl mb-4">✈️</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Telegram</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Connect via bot token
                    </p>
                    <ul className="text-xs text-gray-600 text-left space-y-1">
                        <li>✓ Better for bots</li>
                        <li>✓ Free bot API</li>
                        <li>✓ No phone number needed</li>
                    </ul>
                </button>
            </div>

            {/* Back Button */}
            <div className="flex justify-center">
                <button
                    onClick={onBack}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                >
                    ← Back
                </button>
            </div>
        </div>
    );
}
