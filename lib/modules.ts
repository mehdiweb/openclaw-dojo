export interface Module {
    id: string;
    slug: string;
    title: string;
    description: string;
    tier: 'free' | 'builder' | 'architect';
    level: 1 | 2 | 3 | 4;
    estimatedTime: string;
    prerequisites: string[];
    tags: string[];
    icon: string;
}

export const modules: Module[] = [
    // FREE MODULES (1-7) - Operator Tier - Fully written content
    {
        id: '01',
        slug: 'before-you-start',
        title: 'Before You Start',
        description: 'Prerequisites and what you need to deploy OpenClaw successfully',
        tier: 'free',
        level: 1,
        estimatedTime: '10 min',
        prerequisites: [],
        tags: ['setup', 'prerequisites'],
        icon: '📋'
    },
    {
        id: '02',
        slug: 'installation',
        title: 'Installation',
        description: 'Install OpenClaw Gateway using the official installer or npm',
        tier: 'free',
        level: 1,
        estimatedTime: '15 min',
        prerequisites: ['01'],
        tags: ['installation', 'setup'],
        icon: '⚡'
    },
    {
        id: '03',
        slug: 'first-time-setup',
        title: 'First-Time Setup',
        description: 'Run the onboarding wizard and configure authentication',
        tier: 'free',
        level: 1,
        estimatedTime: '20 min',
        prerequisites: ['01', '02'],
        tags: ['configuration', 'wizard'],
        icon: '🧙'
    },
    {
        id: '04',
        slug: 'connect-whatsapp',
        title: 'Connect WhatsApp',
        description: 'Link OpenClaw to WhatsApp using QR codes and pairing',
        tier: 'free',
        level: 1,
        estimatedTime: '15 min',
        prerequisites: ['03'],
        tags: ['whatsapp', 'messaging'],
        icon: '💬'
    },
    {
        id: '05',
        slug: 'connect-telegram',
        title: 'Connect Telegram',
        description: 'Set up Telegram bot integration with BotFather',
        tier: 'free',
        level: 1,
        estimatedTime: '15 min',
        prerequisites: ['03'],
        tags: ['telegram', 'messaging'],
        icon: '✈️'
    },
    {
        id: '06',
        slug: 'testing-setup',
        title: 'Testing Your Setup',
        description: 'Verify everything works with health checks and test messages',
        tier: 'free',
        level: 1,
        estimatedTime: '10 min',
        prerequisites: ['04', '05'],
        tags: ['testing', 'verification'],
        icon: '✅'
    },
    {
        id: '07',
        slug: 'common-errors',
        title: 'Common Errors & Fixes',
        description: 'Troubleshoot the most frequent deployment issues',
        tier: 'free',
        level: 1,
        estimatedTime: '15 min',
        prerequisites: [],
        tags: ['troubleshooting', 'errors'],
        icon: '🔍'
    },

    // FREE MODULES (8-13) - Content outlined, needs expansion
    {
        id: '08',
        slug: 'memory-systems',
        title: 'Memory Systems',
        description: 'Configure short-term, long-term, and vector memory',
        tier: 'free',
        level: 2,
        estimatedTime: '25 min',
        prerequisites: ['06'],
        tags: ['memory', 'advanced'],
        icon: '🧠'
    },
    {
        id: '09',
        slug: 'network-integration',
        title: 'Network Integration',
        description: 'Connect to external APIs and webhooks',
        tier: 'free',
        level: 2,
        estimatedTime: '30 min',
        prerequisites: ['06'],
        tags: ['networking', 'apis'],
        icon: '🌐'
    },
    {
        id: '10',
        slug: 'audio-vision',
        title: 'Audio & Vision',
        description: 'Enable voice messages and image processing',
        tier: 'free',
        level: 2,
        estimatedTime: '35 min',
        prerequisites: ['08'],
        tags: ['audio', 'vision', 'multimodal'],
        icon: '🎙️'
    },
    {
        id: '11',
        slug: 'advanced-channels',
        title: 'Advanced Channels',
        description: 'Discord, Slack, and iMessage integration',
        tier: 'free',
        level: 2,
        estimatedTime: '40 min',
        prerequisites: ['04', '05'],
        tags: ['channels', 'integrations'],
        icon: '📡'
    },
    {
        id: '12',
        slug: 'security-basics',
        title: 'Security Basics',
        description: 'Access control, rate limiting, and basic hardening',
        tier: 'free',
        level: 2,
        estimatedTime: '30 min',
        prerequisites: ['06'],
        tags: ['security', 'access-control'],
        icon: '🔒'
    },
    {
        id: '13',
        slug: 'performance-tuning',
        title: 'Performance Tuning',
        description: 'Optimize response times and resource usage',
        tier: 'free',
        level: 2,
        estimatedTime: '25 min',
        prerequisites: ['08', '12'],
        tags: ['performance', 'optimization'],
        icon: '⚡'
    },

    // BUILDER TIER MODULES (14-17) - $49
    {
        id: '14',
        slug: 'advanced-defense',
        title: 'Advanced Defense',
        description: 'Implement security hardening and threat protection',
        tier: 'builder',
        level: 3,
        estimatedTime: '45 min',
        prerequisites: ['12'],
        tags: ['security', 'advanced'],
        icon: '🛡️'
    },
    {
        id: '15',
        slug: 'custom-tools',
        title: 'Custom Tools',
        description: 'Build and integrate custom AI tools and functions',
        tier: 'builder',
        level: 3,
        estimatedTime: '60 min',
        prerequisites: ['09'],
        tags: ['tools', 'development'],
        icon: '🔧'
    },
    {
        id: '16',
        slug: 'browser-automation',
        title: 'Browser Automation',
        description: 'Web scraping and browser control for your agent',
        tier: 'builder',
        level: 3,
        estimatedTime: '50 min',
        prerequisites: ['15'],
        tags: ['automation', 'browser'],
        icon: '🌐'
    },
    {
        id: '17',
        slug: 'complex-workflows',
        title: 'Complex Workflows',
        description: 'Multi-step automation and cron job scheduling',
        tier: 'builder',
        level: 3,
        estimatedTime: '55 min',
        prerequisites: ['15'],
        tags: ['automation', 'workflows'],
        icon: '⚙️'
    },

    // ARCHITECT TIER MODULES (18-20) - $199
    {
        id: '18',
        slug: 'multi-agent-systems',
        title: 'Multi-Agent Systems',
        description: 'Build coordinated multi-agent deployments',
        tier: 'architect',
        level: 4,
        estimatedTime: '90 min',
        prerequisites: ['17'],
        tags: ['architecture', 'advanced'],
        icon: '🎯'
    },
    {
        id: '19',
        slug: 'plugin-development',
        title: 'Plugin Development',
        description: 'Create reusable plugins and extensions',
        tier: 'architect',
        level: 4,
        estimatedTime: '120 min',
        prerequisites: ['15', '18'],
        tags: ['development', 'plugins'],
        icon: '🔌'
    },
    {
        id: '20',
        slug: 'production-deployment',
        title: 'Production Deployment',
        description: 'Deploy at scale with monitoring and failover',
        tier: 'architect',
        level: 4,
        estimatedTime: '90 min',
        prerequisites: ['18', '19'],
        tags: ['deployment', 'production'],
        icon: '🚀'
    },
];

// Helper functions
export function getModuleBySlug(slug: string): Module | undefined {
    return modules.find(m => m.slug === slug);
}

export function getModuleById(id: string): Module | undefined {
    return modules.find(m => m.id === id);
}

export function getFreeModules(): Module[] {
    return modules.filter(m => m.tier === 'free');
}

export function getBuilderModules(): Module[] {
    return modules.filter(m => m.tier === 'builder');
}

export function getArchitectModules(): Module[] {
    return modules.filter(m => m.tier === 'architect');
}

export function getModulesByTier(tier: 'free' | 'builder' | 'architect'): Module[] {
    return modules.filter(m => m.tier === tier);
}
