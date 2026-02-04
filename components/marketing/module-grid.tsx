import { ModuleCard } from "@/components/ui/module-card";

const freeModules = [
    {
        id: "01-before-you-start",
        title: "Before You Start",
        description: "Prerequisites and what you need before installing OpenClaw",
        icon: "📋",
        level: 1 as const,
        upvotes: 24,
        comments: 8,
    },
    {
        id: "02-installation",
        title: "Installation",
        description: "Install OpenClaw using the official installer or npm",
        icon: "⚡",
        level: 1 as const,
        upvotes: 32,
        comments: 12,
    },
    {
        id: "03-first-time-setup",
        title: "First-Time Setup",
        description: "Run the onboarding wizard and configure your gateway",
        icon: "🔧",
        level: 1 as const,
        upvotes: 28,
        comments: 6,
    },
    {
        id: "04-connect-whatsapp",
        title: "Connect WhatsApp",
        description: "Link OpenClaw to WhatsApp with QR code pairing",
        icon: "💬",
        level: 1 as const,
        upvotes: 45,
        comments: 15,
    },
    {
        id: "05-connect-telegram",
        title: "Connect Telegram",
        description: "Set up your Telegram bot with BotFather",
        icon: "✈️",
        level: 1 as const,
        upvotes: 38,
        comments: 9,
    },
    {
        id: "06-testing-setup",
        title: "Testing Your Setup",
        description: "Verify everything works with health checks",
        icon: "✅",
        level: 1 as const,
        upvotes: 22,
        comments: 4,
    },
    {
        id: "07-common-errors",
        title: "Common Errors",
        description: "Troubleshoot the most frequent issues",
        icon: "🔍",
        level: 1 as const,
        upvotes: 56,
        comments: 21,
    },
];

export function ModuleGrid() {
    return (
        <section className="py-12 bg-background">
            <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
                {/* Section header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-text-primary">
                        Free Modules
                    </h2>
                    <p className="mt-2 text-text-secondary">
                        7 core modules to get you from zero to running OpenClaw
                    </p>
                </div>

                {/* Module grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {freeModules.map((module) => (
                        <ModuleCard key={module.id} {...module} />
                    ))}
                </div>
            </div>
        </section>
    );
}
