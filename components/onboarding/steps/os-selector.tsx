import { OS } from '@/lib/onboarding-flow';

interface OSSelectorProps {
    selectedOS?: OS;
    onNext: (updates: { os: OS }) => void;
}

export function OSSelector({ selectedOS, onNext }: OSSelectorProps) {
    const handleSelect = (os: OS) => {
        onNext({ os });
    };

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <p className="text-lg text-gray-700">
                    Choose your operating system so we can show you the right commands:
                </p>
            </div>

            {/* OS Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* macOS */}
                <button
                    onClick={() => handleSelect('macos')}
                    className={`bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all text-center ${selectedOS === 'macos' ? 'ring-4 ring-[#FFD54F]' : ''
                        }`}
                >
                    <div className="text-6xl mb-4">🍎</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">macOS</h3>
                    <p className="text-sm text-gray-600">
                        Mac computers
                    </p>
                </button>

                {/* Linux */}
                <button
                    onClick={() => handleSelect('linux')}
                    className={`bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all text-center ${selectedOS === 'linux' ? 'ring-4 ring-[#FFD54F]' : ''
                        }`}
                >
                    <div className="text-6xl mb-4">🐧</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Linux</h3>
                    <p className="text-sm text-gray-600">
                        Ubuntu, Debian, etc.
                    </p>
                </button>

                {/* Windows */}
                <button
                    onClick={() => handleSelect('windows')}
                    className={`bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all text-center ${selectedOS === 'windows' ? 'ring-4 ring-[#FFD54F]' : ''
                        }`}
                >
                    <div className="text-6xl mb-4">🪟</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Windows</h3>
                    <p className="text-sm text-gray-600">
                        Windows 10/11 + WSL2
                    </p>
                </button>
            </div>

            {/* Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
                <strong>Note:</strong> Windows users will need WSL2 (Windows Subsystem for Linux). We'll help you set it up if needed.
            </div>
        </div>
    );
}
