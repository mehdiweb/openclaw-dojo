export type OS = 'macos' | 'linux' | 'windows';
export type Channel = 'whatsapp' | 'telegram';

export interface OnboardingState {
    currentStep: number;
    totalSteps: number;
    os?: OS;
    channel?: Channel;
    hasNodeJS?: boolean;
    hasNPM?: boolean;
    apiKey?: string;
    botToken?: string;
    completed: boolean;
}

export const INITIAL_STATE: OnboardingState = {
    currentStep: 0,
    totalSteps: 8,
    completed: false
};

// Wizard steps based on existing modules
export const WIZARD_STEPS = [
    {
        id: 'welcome',
        title: 'Welcome',
        description: 'Let\'s get you started',
        moduleRef: '01-before-you-start'
    },
    {
        id: 'os-selection',
        title: 'Your System',
        description: 'Choose your operating system',
        moduleRef: '01-before-you-start'
    },
    {
        id: 'prerequisites',
        title: 'Prerequisites',
        description: 'Check Node.js and npm',
        moduleRef: '01-before-you-start'
    },
    {
        id: 'installation',
        title: 'Installation',
        description: 'Install OpenClaw',
        moduleRef: '02-installation'
    },
    {
        id: 'api-key',
        title: 'API Key',
        description: 'Set up Anthropic API',
        moduleRef: '03-first-time-setup'
    },
    {
        id: 'channel-selection',
        title: 'Choose Channel',
        description: 'WhatsApp or Telegram?',
        moduleRef: '04-connect-whatsapp'
    },
    {
        id: 'connect-channel',
        title: 'Connect',
        description: 'Link your messaging app',
        moduleRef: '04-connect-whatsapp' // or 05-connect-telegram
    },
    {
        id: 'test',
        title: 'Test',
        description: 'Send your first message',
        moduleRef: '06-testing-setup'
    },
    {
        id: 'success',
        title: 'Success!',
        description: 'You did it!',
        moduleRef: '06-testing-setup'
    }
];

// OS-specific commands from Module 2
export const INSTALL_COMMANDS = {
    macos: {
        checkNode: 'node --version',
        checkNpm: 'npm --version',
        installNode: 'brew install node',
        installOpenClaw: 'npm install -g openclaw'
    },
    linux: {
        checkNode: 'node --version',
        checkNpm: 'npm --version',
        installNode: 'sudo apt-get install nodejs npm',
        installOpenClaw: 'npm install -g openclaw'
    },
    windows: {
        checkNode: 'node --version',
        checkNpm: 'npm --version',
        installNode: 'Download from nodejs.org',
        installOpenClaw: 'npm install -g openclaw'
    }
};

// Channel-specific setup from Modules 4 & 5
export const CHANNEL_SETUP = {
    whatsapp: {
        command: 'openclaw connect whatsapp',
        steps: [
            'Run the command in your terminal',
            'A QR code will appear',
            'Open WhatsApp on your phone',
            'Go to Settings → Linked Devices',
            'Tap "Link a Device"',
            'Scan the QR code'
        ]
    },
    telegram: {
        command: 'openclaw connect telegram',
        steps: [
            'Open Telegram and search for @BotFather',
            'Send /newbot to create a bot',
            'Follow the prompts to name your bot',
            'Copy the API token BotFather gives you',
            'Paste it in the field below'
        ]
    }
};

// Helper functions
export function saveOnboardingState(state: OnboardingState): void {
    if (typeof window !== 'undefined') {
        // Only save serializable properties
        const serializableState = {
            currentStep: state.currentStep,
            totalSteps: state.totalSteps,
            os: state.os,
            channel: state.channel,
            hasNodeJS: state.hasNodeJS,
            hasNPM: state.hasNPM,
            apiKey: state.apiKey,
            botToken: state.botToken,
            completed: state.completed
        };
        localStorage.setItem('onboarding-state', JSON.stringify(serializableState));
    }
}

export function loadOnboardingState(): OnboardingState | null {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('onboarding-state');
        return saved ? JSON.parse(saved) : null;
    }
    return null;
}

export function clearOnboardingState(): void {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('onboarding-state');
    }
}

export function getStepTitle(stepIndex: number): string {
    return WIZARD_STEPS[stepIndex]?.title || '';
}

export function getStepDescription(stepIndex: number): string {
    return WIZARD_STEPS[stepIndex]?.description || '';
}
