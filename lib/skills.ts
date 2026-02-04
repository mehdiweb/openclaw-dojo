export interface Skill {
    id: string;
    name: string;
    icon: string;
    description: string;
    category: 'local-business' | 'freelancer' | 'creator' | 'team';
    tier: 'builder' | 'architect';
    estimatedTime: string;
    forWho: string[];
    whatItDoes: string[];
    sourceUrl?: string;
    sourceType: 'skills.sh' | 'github' | 'custom';
}

export const skills: Skill[] = [
    // LOCAL BUSINESS SKILLS
    {
        id: 'phone-ai-receptionist',
        name: 'Phone AI Receptionist',
        icon: '📞',
        description: 'Answer calls 24/7 with AI',
        category: 'local-business',
        tier: 'builder',
        estimatedTime: '15 min',
        forWho: [
            'Medical practices (doctors, dentists)',
            'Law firms',
            'Restaurants & cafes',
            'Salons & spas',
            'Any business that gets phone calls'
        ],
        whatItDoes: [
            'Answers incoming calls automatically',
            'Books appointments via voice',
            'Collects caller information',
            'Sends you a summary after each call',
            'Works 24/7, never misses a call'
        ],
        sourceUrl: 'https://skills.sh/skills/phone-assistant',
        sourceType: 'skills.sh'
    },
    {
        id: 'appointment-booker',
        name: 'Appointment Booker',
        icon: '📅',
        description: 'SMS/WhatsApp scheduling system',
        category: 'local-business',
        tier: 'builder',
        estimatedTime: '12 min',
        forWho: [
            'Hair salons & barbershops',
            'Medical clinics',
            'Consultants',
            'Personal trainers',
            'Service-based businesses'
        ],
        whatItDoes: [
            'Customers book via SMS or WhatsApp',
            'Syncs with your calendar',
            'Sends appointment reminders',
            'Handles rescheduling requests',
            'No more phone tag'
        ],
        sourceUrl: 'https://skills.sh/skills/booking-assistant',
        sourceType: 'skills.sh'
    },
    {
        id: 'review-collector',
        name: 'Review Collector',
        icon: '⭐',
        description: 'Auto-request Google reviews',
        category: 'local-business',
        tier: 'builder',
        estimatedTime: '10 min',
        forWho: [
            'Restaurants',
            'Local shops',
            'Service providers',
            'Any business needing reviews'
        ],
        whatItDoes: [
            'Automatically asks happy customers for reviews',
            'Sends personalized review requests',
            'Tracks who left reviews',
            'Follows up politely if no response',
            'Builds your online reputation'
        ],
        sourceType: 'custom'
    },

    // FREELANCER SKILLS
    {
        id: 'invoice-reminder',
        name: 'Invoice Reminder Bot',
        icon: '💰',
        description: 'Chase late payments automatically',
        category: 'freelancer',
        tier: 'builder',
        estimatedTime: '10 min',
        forWho: [
            'Freelance designers',
            'Developers',
            'Consultants',
            'Agencies',
            'Anyone who invoices clients'
        ],
        whatItDoes: [
            'Sends polite payment reminders',
            'Escalates if invoice is very late',
            'Tracks payment status',
            'Integrates with Stripe/PayPal',
            'Get paid faster without awkward emails'
        ],
        sourceType: 'custom'
    },
    {
        id: 'client-onboarding',
        name: 'Client Onboarding Bot',
        icon: '👋',
        description: 'Collect project info automatically',
        category: 'freelancer',
        tier: 'builder',
        estimatedTime: '12 min',
        forWho: [
            'Web designers',
            'Copywriters',
            'Consultants',
            'Agencies',
            'Service providers'
        ],
        whatItDoes: [
            'Asks clients for project details',
            'Collects brand assets & preferences',
            'Creates project brief automatically',
            'Saves 3+ hours per client',
            'Professional first impression'
        ],
        sourceType: 'custom'
    },
    {
        id: 'meeting-summarizer',
        name: 'Meeting Summarizer',
        icon: '📝',
        description: 'Record & summarize calls',
        category: 'freelancer',
        tier: 'builder',
        estimatedTime: '15 min',
        forWho: [
            'Consultants',
            'Project managers',
            'Sales teams',
            'Anyone in meetings'
        ],
        whatItDoes: [
            'Records Zoom/Google Meet calls',
            'Transcribes automatically',
            'Generates action items',
            'Sends summary to attendees',
            'Never take notes again'
        ],
        sourceUrl: 'https://skills.sh/skills/meeting-notes',
        sourceType: 'skills.sh'
    },

    // CREATOR SKILLS
    {
        id: 'content-scheduler',
        name: 'Content Scheduler',
        icon: '📱',
        description: 'Auto-post to all social platforms',
        category: 'creator',
        tier: 'builder',
        estimatedTime: '15 min',
        forWho: [
            'YouTubers',
            'Bloggers',
            'Podcasters',
            'Content creators',
            'Social media managers'
        ],
        whatItDoes: [
            'Post once, publish everywhere',
            'Schedules to Twitter, LinkedIn, Instagram',
            'Adapts content per platform',
            'Optimal posting times',
            'Save 10+ hours/week'
        ],
        sourceUrl: 'https://skills.sh/skills/social-publisher',
        sourceType: 'skills.sh'
    },
    {
        id: 'newsletter-generator',
        name: 'Newsletter Generator',
        icon: '📧',
        description: 'Turn content into email newsletters',
        category: 'creator',
        tier: 'builder',
        estimatedTime: '12 min',
        forWho: [
            'Bloggers',
            'YouTubers',
            'Podcasters',
            'Writers',
            'Course creators'
        ],
        whatItDoes: [
            'Converts blog posts to newsletters',
            'Generates engaging subject lines',
            'Formats for email perfectly',
            'Sends via Substack/ConvertKit',
            'Grow your email list effortlessly'
        ],
        sourceType: 'custom'
    },

    // TEAM/SAAS SKILLS
    {
        id: 'support-bot',
        name: 'Customer Support Bot',
        icon: '💬',
        description: 'Answer FAQs automatically',
        category: 'team',
        tier: 'builder',
        estimatedTime: '20 min',
        forWho: [
            'SaaS companies',
            'Startups',
            'E-commerce stores',
            'Any business with support tickets'
        ],
        whatItDoes: [
            'Answers common questions instantly',
            'Escalates complex issues to humans',
            'Works on Slack, Discord, email',
            'Learns from your docs',
            'Support at scale'
        ],
        sourceUrl: 'https://skills.sh/skills/support-agent',
        sourceType: 'skills.sh'
    },
    {
        id: 'lead-qualifier',
        name: 'Lead Qualifier',
        icon: '🎯',
        description: 'Filter good leads from bad',
        category: 'team',
        tier: 'builder',
        estimatedTime: '15 min',
        forWho: [
            'Sales teams',
            'B2B companies',
            'Agencies',
            'High-ticket services'
        ],
        whatItDoes: [
            'Asks qualifying questions',
            'Scores leads automatically',
            'Routes hot leads to sales',
            'Filters out tire-kickers',
            'Focus on deals that close'
        ],
        sourceType: 'custom'
    }
];

// Helper functions
export function getSkillsByCategory(category: Skill['category']): Skill[] {
    return skills.filter(s => s.category === category);
}

export function getSkillById(id: string): Skill | undefined {
    return skills.find(s => s.id === id);
}

export function getBuilderSkills(): Skill[] {
    return skills.filter(s => s.tier === 'builder');
}
