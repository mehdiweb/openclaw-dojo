import { Users, Star, Coffee, Zap } from "lucide-react";

const stats = [
    {
        label: "Successful Deployments",
        value: "100+",
        icon: Zap,
    },
    {
        label: "Community Rating",
        value: "4.9/5",
        icon: Star,
    },
    {
        label: "Coffee Supporters",
        value: "47",
        icon: Coffee,
    },
    {
        label: "Discord Members",
        value: "230+",
        icon: Users,
    },
];

export function TrustBar() {
    return (
        <section className="py-12 border-y border-bg-tertiary bg-bg-secondary/50">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center text-center">
                            <stat.icon className="h-6 w-6 text-lobster mb-2" />
                            <span className="text-2xl font-bold text-text-primary lg:text-3xl">
                                {stat.value}
                            </span>
                            <span className="text-sm text-text-muted mt-1">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
